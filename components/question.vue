<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import { type QuestionType } from "~/utils/types.d";
import {renderToString} from "katex";

const replaceLatexStrings = (orig:string) => {

	return orig.replace(/\$(.*?)\$/g, (_, latex) => renderToString(latex));
}

const props = defineProps({
	question: {
		type: Object as PropType<QuestionType>,
		required: true,
	},
	showResults: {
		type: Boolean,
		required: false,
		default: false
	}
});

const answers = {
		texts: [
			props.question.answer_a,
			props.question.answer_b,
			props.question.answer_c,
			props.question.answer_d,
		],
		pictures: [
			props.question.picture_a,
			props.question.picture_b,
			props.question.picture_c,
			props.question.picture_d,
		],
		picture_answers_available : !!props.question.picture_a
	}

const shuffledIndexes = [0, 1, 2, 3].sort(() => Math.random() - 0.5);

const answered_correctly = ref(false);
const latexQuestion = replaceLatexStrings(props.question.question)

</script>

<template>
<div>
	<UCard variant="subtle" class="m-5"
	:class="{
		'bg-green-100 dark:bg-green-900': answered_correctly && props.showResults,
		'bg-red-100 dark:bg-red-900': !answered_correctly && props.showResults
	}">
		<template #header class="pl-2">
			<div style="display: flex; align-items: center;">
					<u-badge size="sm" variant="subtle" color="neutral" class="ml-0 mr-3" >{{ question.number }}</u-badge>
					<h2 v-html="latexQuestion"></h2>
			</div>
		</template>
		<div v-if="question.picture_question" style="height: 200px">
			<nuxtImg
				:src="'Fragen/svgs/' + question.picture_question + '.svg'"
				densities="x1 x2"
				class="h-full mx-auto dark:invert"/>
		</div>
		<!-- Antworten evtl. mit Bildern-->
		<template #footer>
		<div
			class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mx-auto"
		>
			<div v-for="(shuffled_idx, index) in shuffledIndexes" :key="index" class="flex items-center justify-center p-2"
			:class="{
				'border rounded-lg border-dashed border-green-500 border-4': shuffled_idx == 0 && showResults
			}"
			>
				<input
					type="radio"
					:name="question.number"
					:value="shuffled_idx"
					:id="`${question.number}_${shuffled_idx}`"
					class="mr-2"
					@click="answered_correctly = shuffled_idx == 0"
				><label :for="`${question.number}_${shuffled_idx}`">
					<div v-if="answers.picture_answers_available" style="height: 150px">
						<nuxtImg
							:src="'Fragen/svgs/' + answers.pictures[shuffled_idx] + '.svg'"
							densities="x1 x2"
							class="h-full mx-auto dark:invert"
						/>
					</div>
				<div v-else v-html="replaceLatexStrings(answers.texts[shuffled_idx])">

				</div>
				</label>
			</div>
		</div>

		</template>
	</UCard>

</div>
</template>

<style scoped>

</style>