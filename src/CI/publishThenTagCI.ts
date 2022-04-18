export async function publishThenTagCI(githubToken: string, repo: string, sha: string): Promise<void> {
    console.log("CI mode", repo, sha);
    const [versionToPublish, npmVersion] = await Promise.all([
        getVersionToPublish(),
        getNpmVersion()
    ])
}
