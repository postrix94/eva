import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from "@vitejs/plugin-vue"; //add this line
import {normalizePath} from "vite";

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: [
                normalizePath('resources/css/app.css'), normalizePath('resources/js/app.js'),
                normalizePath('resources/css/admin_lte.css'), normalizePath('resources/js/admin_lte.js'),
            ],
            refresh: true,
        }),
    ],
    build: {
        chunkSizeWarningLimit: 1600,
        sourcemap: true,
        cssCodeSplit:true,
    }
});
