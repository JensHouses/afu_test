<script setup lang="ts">
 const items = ref<NavigationMenuItem[]>([
	{
		label: 'Startseite',
		to: '/',
	},
	{
		label: 'Online Prüfungsfragen',
		to: '/online',
	},
	{
		label: 'Über uns',
		to: '/about',
	},
	 ]);
</script>

<template>
	<div>
		<header>
			<UNavigationMenu
				highlight
				highlight-color="primary"
				orientation="horizontal"
				:items="items"
				class="data-[orientation=horizontal]:border-b border-default data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-48"
			/>
		</header>

		<main>
			<NuxtPage />
		</main>

		<footer>
			<p>&copy; 2024 - Amateurfunk Prüfungshilfe</p>
			<p>Weitere Tools und Materialien finden Sie auf unserer <a href="https://github.com" target="_blank">GitHub-Seite</a>.</p>
		</footer>
	</div>
</template>

<style scoped>

</style>