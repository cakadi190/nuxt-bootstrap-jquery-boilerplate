<script lang="ts" setup>
onMounted(() => {
	// TODO: enable tooltip bootstrap 5
	var tooltipTriggerList = [].slice.call(
		document.querySelectorAll('[data-bs-toggle="tooltip"]')
	);
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new window.bootstrap.Tooltip(tooltipTriggerEl);
	});

  // TODO: enable popover bootstrap 5
  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new window.bootstrap.Popover(popoverTriggerEl);
  })
});
</script>

<template>
	<nuxt-layout>
		<nuxt-page />
	</nuxt-layout>
</template>

<style>
:root {
  --bs-font-sans-serif: "Inter", sans-serif;
  --bs-font-monospace: "JetBrains Mono", monospace;
}
</style>