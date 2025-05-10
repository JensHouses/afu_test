<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	questions: {
		type: Object,
		required: true,
	},
	showResults: {
		type: Boolean,
		required: false,
		default: false
	}
});
const items = props.questions.map((section:any) => {
	return {
		label: section.question
	};
});
</script>

<template>
	<div class="text-2xl">{{title}}!!</div>
	<template v-for="question in props.questions" :key="question.number">
		<question :question="question" :showResults="props.showResults" @submit="(id) => console.log(id)" />
	</template>

</template>

<style scoped>

</style>