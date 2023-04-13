<template>
  <div id="app">Nothing to display here</div>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia';
// Option store produces the same result
import { Ref, computed } from 'vue';
import type { MyClass } from './MyClass';
import { MyObject, myCompositionStore } from './stores/myCompositionStore';

export default {
  name: 'App',
  components: {},
  setup() {
    const compositionStore = myCompositionStore();
    const { name, myClass, formType, myFile } = storeToRefs(compositionStore);

    // Ref<string> it's correct
    type TypeName = typeof name;
    // Ref<File> it's correct
    type TypeMyFile = typeof myFile;


    // Here it's not I receive Ref<{...myclasscontent}> but I expected to have a Ref<MyClass>
    type TypeMySimpleClass = typeof myClass;

    // It start to cause problem in this case for exemple
    // @ts-expect-error
    const classes = computed<Array<MyClass>>(() => formType.value.myClasses ?? [] );
    // This is my current workaround
    const alsoClasses = computed<Array<MyClass>>(() => (formType as Ref<MyObject>).value.myClasses ?? [] );
  },
};
</script>
