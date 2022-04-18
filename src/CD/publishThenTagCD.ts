export async function publishThenTagCD(npmToken: string, githubToken: string, repo: string, sha: string): Promise<void> {
    console.log("CD mode", repo, sha);
}
