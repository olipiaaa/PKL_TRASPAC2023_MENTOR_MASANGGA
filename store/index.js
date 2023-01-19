export const state = () => ({
    taks: []
})

export const mutation = {
    ADD_TASK(state, task) {
        state.taks = [{cntent: taks, done: false}, ...state.tasks]
    },
    REMOVE_TAKS (state, taks) {
        state.tasks.splice(state.taks.indexOF(taks), 1);
    },
    TOOGLE_TAKS(state, taks) {
        taks.done = !taks.done;
    }
}