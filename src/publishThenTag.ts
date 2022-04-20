import * as core from "@actions/core";
import { publishThenTagCD } from "./CD/publishThenTagCD";
import { publishThenTagCI } from "./CI/publishThenTagCI";
import { PTTMode } from "./types/mode.enum";

const npmToken = core.getInput("npmToken");
const githubToken = core.getInput("githubToken");
const repo = core.getInput("repo");
const sha = core.getInput("sha");
const mode = core.getInput("mode") as PTTMode;

publishThenTag(npmToken, githubToken, repo, sha, mode)
    .catch(err => core.setFailed(err.message));

async function publishThenTag(npmToken: string, githubToken: string, repo: string, sha: string, mode: PTTMode): Promise<void> {
    switch (mode) {
        case PTTMode.CI:
            return publishThenTagCI(githubToken, repo, sha);
        case PTTMode.CD:
            return publishThenTagCD(npmToken, githubToken, repo, sha);
        default:
            throw new Error(`Unknown mode: ${mode}`);
    }
}
