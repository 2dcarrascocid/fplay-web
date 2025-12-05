import { defineStore } from "pinia";

export const useUiStore = defineStore("ui", {
    state: () => ({
        loading: false,
        modalOpen: false,
    }),

    actions: {
        showLoading() { this.loading = true; },
        hideLoading() { this.loading = false; },
        openModal() { this.modalOpen = true; },
        closeModal() { this.modalOpen = false; }
    }
});
