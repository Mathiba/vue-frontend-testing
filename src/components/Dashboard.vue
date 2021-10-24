<template>
    <section class="section">
        <div class="container">
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-menu is-active buttons">
                    <router-link to="/" tag="button" id='home-button' class="button is-link"> Home </router-link>
                    <router-link to="/clients"  tag="button" id='home-button' class="button is-link"> Clients </router-link>
                    <router-link to="/contacts"  tag="button" id='home-button' class="button is-link"> Contact-us </router-link>
                </div>
            </nav>
            <router-view></router-view>
        </div>
    </section>
</template>
