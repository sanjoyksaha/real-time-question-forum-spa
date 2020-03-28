<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Document</title>
    <link rel="stylesheet" href="{{ asset('css/app.css')}}">
</head>
<body>
    <div id="app">
        <v-app>
          {{-- <v-content>
            <v-container>Hello world</v-container>
          </v-content> --}}
            {{-- <v-card color="grey lighten-4" flat tile>
            	<v-toolbar dense>
					<v-app-bar-nav-icon></v-app-bar-nav-icon>
			
					<v-toolbar-title>Title</v-toolbar-title>
			
					<v-spacer></v-spacer>
			
					<v-btn text>Link1</v-btn>
			
					<v-btn text>Link2</v-btn>
			
					<v-btn text>Link3</v-btn>
              	</v-toolbar>
			</v-card> --}}
			<app-home></app-home>
        </v-app>
    </div>

<script src="{{ asset('js/app.js')}}"></script>
</body>
</html>