import { defineStore } from "pinia";
import { ref } from "vue";
import { MyClass } from "../MyClass";

export type MyObject = {
    dataFromMyForm?: string;
    myClasses?: MyClass[];
};

export const myCompositionStore = defineStore("createCampaign", () => {
    const name = ref<string>("this is a cool name");
    const myFile = ref<File>();
    const myClass = ref<MyClass>();

    const formType = ref<MyObject | undefined>();

    return { name, myClass, myFile, formType };
});

