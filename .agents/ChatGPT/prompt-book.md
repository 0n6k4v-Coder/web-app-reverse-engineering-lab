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
# Context
You are continuing a reverse-engineering and cloning task for:

Repository:
https://github.com/0n6k4v-Coder/web-app-reverse-engineering-lab

Target file:
`apps/mtioon/clone/index.html`

Original site:
https://mtioon.com/

Crucial Skills:
- https://github.com/0n6k4v-Coder/skills/tree/master/google/chrome-devtools-mcp/skills

# User Request
Clone the 3D object that appears directly below the Hero section on the original mtioon.com page.

# Task
1. Read and understand the context.
2. Read and understand the user request.

3. Inspect the Target Website’s Original Source Code
- Read the specified skills file first.
- Provide the Chrome DevTools CLI command to launch the target website in the background.
- Provide the command to search for the browser ID.
- Use all available Chrome DevTools CLI tools relevant to the inspection, except image-related tools.
- Continue providing Chrome DevTools CLI commands to inspect the target website’s source code and runtime state.
- Use the returned outputs as the source of truth for reverse-engineering.
- Do not guess or invent implementation details that can be verified through inspection.
- Inspect everything necessary to reproduce the requested target accurately, including:
  - Visual appearance.
  - Structure and components.
  - DOM and rendered elements.
  - Styles and layout.
  - Computed styles.
  - Box model and dimensions.
  - Position, coordinates, and geometry.
  - Transforms and 3D properties.
  - Assets and asset URLs.
  - Network-loaded resources.
  - JavaScript and runtime state.
  - Event listeners and interaction behavior.
  - Animation and transition behavior.
  - Relevant HTML, CSS, JavaScript, SVG, Canvas, or other implementation details.
- Exclude image-related inspection tools that require sending images back to the user.
- Continue until you have enough verified information to understand and reproduce what is needed.

4. Show the Reverse-Engineering Findings
- Present the findings clearly, directly, and concisely.
- Use the most appropriate visual format for the information.
```

```
# Task
Using the Reverse-Engineering Findings:

1. Inspect the Existing Clone
- Read the target file from the repository.
- Use the existing file as the source for the clone.
- Identify the correct location for implementing the requested target.
- Understand the surrounding code before making changes.
- Do not modify unrelated code.

2. Implement the Requested Target
- Materialize the existing file as a container-backed working copy.
- Use the Reverse-Engineering Findings as the implementation specification.
- Apply the changes with a surgical patch script against the working copy.
- Patch only the code required for the requested target.
- Do not rewrite, regenerate, refactor, or normalize unrelated content.
- Preserve all bytes outside the target patch region exactly.
- Treat the source and all non-target regions as immutable.
- Do not modify, commit, or push the GitHub repository.

3. Assemble the Cloned File
- Keep the existing clone intact.
- Insert or replace only the requested target implementation.
- Ensure the final file contains the complete existing clone plus the implemented target.
- Do not remove or alter unrelated existing sections.

4. Validate the Result
- Validate the implemented target against the Reverse-Engineering Findings.
- Run relevant syntax and structural validation.
- Compare untouched regions against the source working copy byte-for-byte.
- Confirm that unrelated sections were not changed.
- Confirm that the final file is complete and valid.

5. Output the Result
- Save the complete assembled clone as a new `/mnt/data/` artifact.
- Verify that the artifact exists.
- Return the sandbox artifact link.
- Briefly state what was implemented and what was validated.
```
