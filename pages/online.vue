   <template>
		 <div class="absolute top-0 right-0 m-5 fixed z-10 bg-green-50 p-2 rounded">
			 <p class="text-black">Zeige Erg.<u-switch v-model="showResults"/></p>
		 </div>
     <div class="online-page">
       <h1>Online Prüfungsfragen</h1>
       <p>Beginne mit den Prüfungsfragen, um dich optimal auf die Amateurfunkprüfung vorzubereiten.</p>

			 <div v-for="section in allSections" >
			 <upper-section :title="section.title" :sections="section.sections" :showResults="showResults"/>
			 </div>
			 <button @click="startQuestions">Fragen starten</button>

			 <question :question="exampleQuestion" :show-results="true"/>
			 <question :question="exampleQuestion2" :show-results="true" />
			 <question :question="exampleQuestion3" :show-results="true" />

     </div>
   </template>

   <script setup lang="ts">
	 import question from "~/components/question.vue";
	 import { type QuestionType } from "~/utils/types.d";
	 import {useQuestionStore} from "~/stores/Questions";

	 const questionStore = useQuestionStore();
	 const allSections = questionStore.getAllSections;
	 const showResults = ref(false);

	 // Funktion zum Starten der Fragen
	 const startQuestions = () => {
		 alert("Fragen starten!"); // Hier kannst du spezifische Logik einbauen
	 };

	 const exampleQuestion: QuestionType = {
		 number: "AC406",
		 class: "3",
		 question: "Das folgende Signal wird als $U_1$ an den Eingang der Schaltung mit Germaniumdioden gelegt. Wie sieht das zugeh\u00f6rige Ausgangssignal $U_2$ aus?",
		 answer_a: "",
		 answer_b: "",
		 answer_c: "",
		 answer_d: "",
		 picture_question: "AC406_q",
		 picture_a: "AC406_a",
		 picture_b: "AC406_b",
		 picture_c: "AC406_c",
		 picture_d: "AC406_d",
	 }
	 const exampleQuestion2: QuestionType = {
		 "number": "EC401",
		 "class": "2",
		 "question": "Wie hoch ist die Spannung zwischen den Punkten a und b in dieser Schaltung f\u00fcr ein Transformationsverh\u00e4ltnis von 15:1?",
		 "answer_a": "Etwa 15 V",
		 "answer_b": "Etwa 1 V",
		 "answer_c": "Etwa 22 V",
		 "answer_d": "Etwa 11 V",
		 "picture_question": "EC401_q"
	 }
	 const exampleQuestion3: QuestionType = {
		 "number": "AC408",
		 "class": "3",
		 "question": "Die Hauptfunktion eines Optokopplers ist ...",
		 "answer_a": "die galvanische Entkopplung zweier Stromkreise durch Licht.",
		 "answer_b": "die Erzeugung von hochfrequentem Wechselstrom durch Licht.",
		 "answer_c": "die Signalanzeige durch Licht.",
		 "answer_d": "die Erzeugung von Gleichstrom durch Licht."
	 }
   </script>

   <style scoped>
   .online-page {
     padding: 2rem;
     text-align: center;
   }

   button {
     background-color: #0077cc;
     color: white;
     border: none;
     padding: 0.5rem 1rem;
     font-size: 1rem;
     cursor: pointer;
     border-radius: 5px;
   }

   button:hover {
     background-color: #0056a3;
   }
   </style>