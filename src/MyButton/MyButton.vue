<template>
  <button :class="classes" @click="onClick">
    <slot />
  </button>
</template>

<script lang="ts" setup="props, ctx">
import { SetupContext } from "vue";
import { ButtonProps, ButtonEvents } from "./types";

declare const props: ButtonProps;
declare const ctx: SetupContext<ButtonEvents>;

export const classes = [props.size, props.type];

export const onClick = (e: MouseEvent) => ctx.emit("click", e);
</script>
