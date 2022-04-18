import { getNpmVersion } from "../common/getNpmVersion";
import { getVersionToPublish } from "../common/getVersionToPublish";

export async function publishThenTagCI(githubToken: string, repo: string, sha: string): Promise<void> {
    console.log("CI mode", repo, sha);
    const [versionToPublish, npmVersion] = await Promise.all([
        getVersionToPublish(),
        getNpmVersion()
    ]);

    console.log("versions ", versionToPublish, npmVersion);
}
