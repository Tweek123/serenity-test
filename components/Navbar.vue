<template>
    <ul class="nav nav-tabs bg-white">
        <li class="nav-item">
          <nuxt-link class="nav-link" exact prefetch active-class="active" to="/">
            Home
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" prefetch active-class="active" to="/users">
            Users
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" prefetch active-class="active" to="/profile">
            Profile
          </nuxt-link>
        </li>
    </ul>
</template>