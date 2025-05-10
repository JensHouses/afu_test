import data from '~/public/Fragen/fragenkatalog3b.json';
import { defineStore } from 'pinia';

export const useQuestionStore = defineStore('questionStore', {
    state: () => ({
        questions: data.sections // JSON-Daten in den State laden
    }),
    getters: {
        getAllSections: (state) => {
            //return the section titles and the index
            return state.questions.map((section, index) => ({
                index: index,
                title: section.title,
                label: section.title, //for the accordion
                sections: section.sections,
            }));
        }
    },

});