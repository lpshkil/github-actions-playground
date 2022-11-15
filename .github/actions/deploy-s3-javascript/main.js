const core = rquire('@actions/core')
const github = rquire('@actions/github')
const exec = rquire('@actions/exec')

function run() {
    core.notice('Hello from my custom JavaScript Action!');
}

run();