import Vue, { VNode } from "vue";

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

declare module "vue/types/cordova" {
  // Global properties can be declared
  // on the `VueConstructor` interface
  interface VueConstructor {
    $cordova: string;
  }
}
