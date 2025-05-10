<script setup lang="ts">
const props = defineProps({
title: {
	type: String,
	required: true,
},
	sections: {
		type: Object,
		required: true,
	},
	showResults: {
		type: Boolean,
		required: false,
		default: false
	}
});
const items = props.sections.map((section:any) => {
	return {
		label: section.title,
		sections: section.sections,
	};
});
</script>

<template>
	<div class="text-2xl">{{title}}!!</div>
	<u-accordion
		:items="items"
		:multiple="true"
		class="w-full" >
		<template #body="{ item }">
			<div v-for="section in item.sections" :key="section.id">

				<middle-section :title="section.title" :questions="section.questions" :showResults="props.showResults"/>
			</div>
		</template>
	</u-accordion>
</template>

<style scoped>

</style>