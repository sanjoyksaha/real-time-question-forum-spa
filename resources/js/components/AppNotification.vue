<template>
    <div>
        <v-menu open-on-hover  transition="fab-transition">
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon color="error">mdi-bell-ring</v-icon>{{unreadCount}}
                </v-btn>
            </template>
            <v-list v-for="item in unread" :key="item.id">
                <router-link :to="item.path" class="mx-3 underline">
                    <v-badge color="error" overlap content="unread" inline>
                        <!-- <v-list-item @click="markRead(item)">{{item.question}}</v-list-item> -->
                        <v-btn text color="error" @click="markRead(item)"><span class="user">{{item.replyBy}}</span> <span class="btn-text">replied on</span> "<span class="font-weight-bold">{{item.question}}"</span></v-btn>
                    </v-badge>
                </router-link>
            </v-list>

            <v-divider></v-divider>

            <v-list v-for="item in read" :key="item.notifiable_id">
                <!-- <v-list-item class="my-0"> -->
                <router-link :to="item.path" class="mx-3 underline">
                    <v-badge color="success" overlap content="read" inline>
                        <v-btn text><span class="user">{{item.replyBy}}</span> <span class="btn-text">replied on</span> "<span class="font-weight-bold question">{{item.question}}"</span></v-btn>
                    </v-badge>
                </router-link>
                <!-- </v-list-item> -->
            </v-list>
        </v-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            read: {},
            unread: {},
            unreadCount: 0,
        }
    },
    created() {
        if(User.loggedIn()) {
            this.getNotifications();
        }

        Echo.private('App.User.' + User.id())
            .notification((notification) => {
                this.unread.unshift(notification);
                this.unreadCount++;
            });
    },

    methods: {
        getNotifications() {
            axios.post('/api/notifications')
                .then(res => {
                    this.read = res.data.read;
                    this.unread = res.data.unread;
                    this.unreadCount = res.data.unread.length;
                })
                .catch(error => Exception.handle(error))
        },

        markRead(notification) {
            axios.post('/api/markAsRead/',{id:notification.id})
                .then(res => {
                    this.unread.splice(notification, 1);
                    this.read.push(notification);
                    this.unreadCount--;
                })
        }
    }
}
</script>

<style scoped>
    .underline{
        text-decoration:none;
    }
    .question{
        color: green;
        text-transform: capitalize;
    }

    .btn-text{
        text-transform: initial;
    }
    .user{
        color: #2e86de;
    }
</style>