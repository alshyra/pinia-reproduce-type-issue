import { defineStore } from "pinia";
import { ref } from "vue";
import { MyClass } from "../MyClass";

export const useStore = defineStore("createCampaign", () => {
    const name = ref<string>("this is a cool name");
    const myFile = ref<File>();
    const myClass = ref<MyClass>();

    return { name, myClass, myFile };
});

