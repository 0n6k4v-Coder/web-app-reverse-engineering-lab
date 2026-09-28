# Prompt Record Book

```text
Give me a chrome dev tools cli command to inspect target website source code and convert them to cloneable technical specification.
```

```text
Give me a chrome dev tools cli command to inspect target website source code. I will run those command in my local device myself and give the results right back to you here.
```

```text
We should observe the original at runtime, not infer anything further from its source.
Let's make the inspection specifically compare footer and navbar pupil movement under controlled pointer positions.
```

```text
Let's implement your finding to our sources code: https://github.com/0n6k4v-Coder/web-app-reverse-engineering-lab/blob/main/apps/mtioon/clone/index.html

Don't update it directly to github. I need to see the code in this conversation. Proceed these task instead.

let's assemble you finding with our existing cloned file. Keep existing clone is preserved, and the Hero is the only inserted section immediately before #kit. I did not modify or push the GitHub repository.
```

```text
# Context
Working Repository: https://github.com/0n6k4v-Coder/web-app-reverse-engineering-lab

Our cloned source code:
- https://github.com/0n6k4v-Coder/web-app-reverse-engineering-lab/blob/main/apps/mtioon/clone/index.html

Crucial Skills:
- https://github.com/0n6k4v-Coder/skills/tree/master/google/chrome-devtools-mcp/skills

# User Request
I want to clone pricing section.

# Task
1. Read and understand the context.
2. Read and understand the user request.

3. Inspect the Target Website’s Original Source Code
- Read the specified skills file first.
- Provide the Chrome DevTools CLI command to launch the target website in the background.
- Search for the browser ID.
- Continue providing Chrome DevTools CLI commands to inspect the target website’s original source code.
- Inspect everything necessary, including:
  - Visual appearance.
  - Functionality and behavior.
  - Structure, components, assets, and relevant code.
- Continue until you have enough context to understand and reproduce what is needed.

4. Summarize your findings clearly, directly, and concisely using the most appropriate visual format.
```

```text
Re-analyze the <Element>.

Carefully inspect the original mtioon implementation and compare it with our current clone. Identify the differences and determine what changes are needed to make our implementation as close to the original as possible, ideally pixel-accurate.
```


```text
Work from the existing file as a local working copy.

Make only the changes I request using a surgical patch/edit approach. Do not rewrite, refactor, regenerate, or otherwise change unrelated parts of the file.

Preserve everything outside the requested edit exactly as-is.

Do not modify or push the GitHub repository.

After editing:

1. Validate that the untouched parts are unchanged.
2. Save the complete final file as a new artifact.
3. Give me the downloadable artifact link.
4. Briefly state exactly what was changed.

Use the existing file as a materialized container-backed working copy.

Apply the requested change with a surgical patch script against the working copy. Do not regenerate the whole file and do not refactor unrelated code.

Preserve all bytes outside the target patch region exactly.

Do not write to, update, commit, or push the GitHub repository.

After patching:

* validate the patched file exists at /mnt/data/
* compare the untouched region against the source working copy byte-for-byte
* run syntax/structural validation where applicable
* save the result as a new sandbox artifact

Return the complete patched artifact with a sandbox download link.

Materialize the existing file into a container-backed working copy.

Patch only the requested region with a script. Treat the source and all non-target regions as immutable.

Do not rewrite, regenerate, refactor, or normalize unrelated content. Preserve non-target bytes exactly.

Do not modify or push GitHub.

Validate the patch, verify the untouched region byte-for-byte, and write the complete result as a new `/mnt/data/` artifact.

Return the sandbox artifact link.
```

| Term to use                                 | What I interpret it as                                   |
| ------------------------------------------- | -------------------------------------------------------- |
| **GitHub fetch/read**                       | Read the repository file without modifying GitHub        |
| **materialize**                             | Turn the existing artifact/file into a real runtime file |
| **container-backed working copy**           | A real editable file under `/mnt/data/`                  |
| **surgical patch**                          | Modify only a specified region                           |
| **in-place transformation of working copy** | Edit that local runtime file, not the repository         |
| **immutable source**                        | Do not modify the original GitHub/source artifact        |
| **byte-for-byte preservation**              | Untouched bytes must remain identical                    |
| **diff validation**                         | Check exactly what changed                               |
| **hash validation / SHA-256**               | Verify file or region integrity                          |
| **runtime validation**                      | Run syntax/structural checks after editing               |
| **derived artifact**                        | The newly generated complete file                        |
| **sandbox artifact**                        | The `/mnt/data/...` file returned to you for download    |


---

```text
You are continuing a reverse-engineering and cloning task for:

Repository:
https://github.com/0n6k4v-Coder/web-app-reverse-engineering-lab

Target file:
`apps/mtioon/clone/index.html`

Original site:
https://mtioon.com/

The existing clone already contains a reconstructed Hero section. Do not assume the existing implementation is perfect; inspect the current clone before making changes.

My next target is the **left 3D object positioned below the Hero section** on the original mtioon.com page.

Your job is to:

1. Inspect the live original site and the current clone.
2. Identify exactly what the left 3D object is made from:

   * DOM / HTML structure
   * CSS
   * SVG / canvas
   * images / video / other assets
   * JavaScript interaction and animation
3. Reverse-engineer its geometry, perspective, depth, positioning, animation, and interaction behavior.
4. Compare the original object with the current clone and determine what is missing or inaccurate.
5. Then clone only that object into the existing clone.

Runtime/file rules:

* Read the GitHub source as read-only.
* Materialize the existing clone as a container-backed working copy before editing.
* Use a surgical patch against the working copy.
* Do not regenerate or rewrite the whole HTML file.
* Treat all unrelated sections as immutable.
* Do not refactor existing code.
* Do not modify, commit, or push the GitHub repository.
* Preserve all non-target bytes byte-for-byte wherever possible.
* Save the completed result as a new `/mnt/data/` derived artifact.

Before editing, show me your reverse-engineering findings for the left 3D object and explain which parts you will patch.
```
