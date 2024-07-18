import { ref, computed, watch } from "vue";

export default function useSearch(props, propsValue) {
    let enteredSearchTerm = ref('');
    let activeSearchTerm = ref('');

    const availableItems = computed(() => {
        let filteredItems = [];
        if (activeSearchTerm.value) {
            filteredItems = props.value.filter((item) => {
                console.log(item, item[propsValue], propsValue);
                item[propsValue].includes(activeSearchTerm.value)
            }
            );
        } else if (props.value) {
            filteredItems = props.value;
        }
        return filteredItems;
    });

    function updateSearch(val) {
        enteredSearchTerm.value = val;
    };

    watch(enteredSearchTerm, (val) => {
        setTimeout(() => {
            if (val === enteredSearchTerm.value) {
                activeSearchTerm.value = val;
            }
        }, 300);
    })

    return {
        enteredSearchTerm,
        availableItems,
        updateSearch
    }
}
