@extends('layouts.app')

@section('content')
    <template>

        <nav class="navbar navbar-expand-lg navbar-light" style="position: sticky; z-index: 3;">
            <nav class="navbar navbar-light">
                <router-link class="navbar-brand text-light" to="/">
                    <img src="{{asset('logo.png')}}" width="30" height="30" class="d-inline-block align-top " alt="">
                    Global Shoe
                </router-link>
            </nav>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link text-light" to="/" exact>Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-light" to="/about">About</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Login
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link class='dropdown-item' to='/login' >Login</router-link>
                            <router-link class='dropdown-item' to='/register'>Register</router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        <div class='container mx-auto py-2'>
            <router-view></router-view>
        </div>
    </template>

@endsection
