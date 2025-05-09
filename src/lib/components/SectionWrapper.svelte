<script>
  export let isVisible = false;
  export let id;
</script>

<div class="content-window {isVisible ? '' : 'hidden'}" id={id}>
  <slot />
</div>
