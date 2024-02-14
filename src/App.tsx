import { createSignal, type Component } from 'solid-js';

import styles from './App.module.css';

const App: Component = () => {
    const [state, setState] = createSignal(false);
    const init = () => {
        setState(true)
        setTimeout(() => setState(false), 60_000)
    }
    return (
        <div id='app-div'  class={styles.App}>
            <header class={styles.header}>
                {!state() ? (<button onClick={() => init()} class={styles['start']}>Start</button>) :
                    (<div class={styles['focus-circle']} />)}
            </header>
        </div>
    );
};

export default App;
