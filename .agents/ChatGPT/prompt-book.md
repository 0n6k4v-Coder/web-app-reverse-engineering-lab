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

---

```text
# Task
Using the Reverse-Engineering Findings:
1. Inspect the Existing Clone
* Read the complete target file directly from the GitHub repository.
* Treat the current repository version as the authoritative baseline.
* Inspect the existing target implementation and its surrounding HTML, CSS, JavaScript, component structure, state, events, and behavior.
* Determine how the current clone implements the requested target.
* Compare the current implementation against the Reverse-Engineering Findings.
* Identify what is already correct.
* Identify what is missing, incorrect, incomplete, or inconsistent.
* Locate the exact regions that must change.
* Identify existing behavior that must be preserved.
* Do not modify the repository.

2. Define the Exact Change
* Decide exactly what needs to be changed based on the source and Reverse-Engineering Findings.
* Determine the smallest implementation change that will reproduce the requested target behavior.
* Decide the exact HTML, CSS, JavaScript, state, interaction, animation, and responsive changes required.
* Decide which existing code should be reused.
* Decide which existing code must remain untouched.
* Resolve implementation ambiguities before involving the Local AI Agent.
* Do not delegate design or architectural decisions to the Local AI Agent.
* Do not ask the Local AI Agent to investigate what needs to change.

3. Generate the Local AI Agent Task
* Convert the implementation decision into one direct execution task.
* State exactly what the Local AI Agent must change.
* State exactly where the change belongs when the location is known.
* State the required behavior, defaults, styling, interactions, and transitions.
* State the code that must remain untouched.
* State the validation requirements relevant to this specific change.
* Keep the task simple, clear, direct, explicit, concise, and ordered.
* Do not include unnecessary research instructions.
* Do not ask the Local AI Agent to make implementation decisions.
* Do not ask it to analyze the Reverse-Engineering Findings independently.
* Do not include work that belongs to later validation tasks.

**Output:** One self-contained implementation task ready to paste into the Local AI Agent.
```

```text
# Task

Execute only the implementation task provided by the Assistant.

## 1. Execute the Change
* Read the specified local file as needed to apply the task.
* Apply exactly the requested implementation.
* Modify only the specified target regions.
* Preserve all unrelated code.
* Do not redesign, refactor, regenerate, reformat, or normalize unrelated content.
* Do not make independent architectural decisions.
* Do not modify, commit, or push GitHub.

## 2. Validate the Change
* Validate the requested implementation against the task.
* Run the specified syntax and structural checks.
* Test the requested behavior where possible.
* Compare the final result against the original local source.
* Verify that non-target regions were not changed.
* Report failures precisely.

## 3. Report the Result
* State exactly what was changed.
* State exactly what was validated.
* State any unexpected changes.
* State any unresolved issue.
* Do not make additional changes unless instructed by the Assistant.
```

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

* https://github.com/0n6k4v-Coder/skills/tree/master/google/chrome-devtools-mcp/skills

# User Request

Clone the 3D object that appears directly below the Hero section on the original mtioon.com page.

# Task

## 1. Understand the Scope

1. Read and understand the Context.
2. Read and understand the User Request.
3. Treat this task as an **original-site reverse-engineering task only**.
4. Do not modify the clone.
5. Do not implement or refactor anything.
6. Do not guess or invent details that can be verified through inspection.

---

## 2. Read the Required Skill

Read the specified Chrome DevTools skill file before starting the investigation.

Use the procedures and tools defined there.

---

## 3. Start the Original Site

Provide and execute the Chrome DevTools CLI command required to launch the original site in the background.

Then provide and execute the command required to identify the browser ID.

Use that browser ID for the investigation.

---

## 4. Investigate the Original Runtime

Use all relevant Chrome DevTools CLI tools available for this investigation.

Exclude image-related tools that require sending images back to the user.

Inspect the requested 3D object from **outside-in and root-to-leaf**.

Start from:

1. page context
2. Hero section boundary
3. target object container
4. parent hierarchy
5. target object root
6. nested descendants
7. rendering layer
8. runtime state
9. assets and dependencies

Do not stop at the first visible container.

---

## 5. Inspect the DOM and Layout

Inspect everything necessary to establish the target's actual structure and geometry:

* DOM hierarchy.
* Parent and child relationships.
* Relevant classes and attributes.
* Element types.
* Computed styles.
* Box model.
* Width and height.
* Position and coordinates.
* Margins, padding, and gaps.
* Overflow and clipping.
* Positioning context.
* Stacking context.
* Transforms.
* Transform origin.
* Perspective.
* Perspective origin.
* Relevant CSS 3D properties.

Determine which element owns:

* Layout.
* Background or surface.
* Clipping.
* Rendering.
* Interaction.

Do not assume the visually nearest element owns these responsibilities.

---

## 6. Recursively Investigate the 3D / Rendering Pipeline

If the object uses Canvas, WebGL, Three.js, SVG, shaders, generated graphics, or another rendering system, investigate that pipeline directly.

Determine, where applicable:

* Rendering surface.
* Canvas dimensions.
* Rendering context.
* Device-pixel-ratio handling.
* Scene hierarchy.
* Object hierarchy.
* Camera.
* Projection.
* Position.
* Rotation.
* Scale.
* Transform hierarchy.
* Lighting.
* Material.
* Shader.
* Texture.
* Environment/background.
* Animation state.
* Interaction state.
* Render loop.
* Resize handling.

Trace the object recursively until the meaningful rendering structure is understood.

Do not infer the internal rendering structure from the final screenshot alone.

---

## 7. Inspect Source Code and Runtime Code

Find the source or bundled runtime code responsible for the target.

Inspect relevant:

* HTML.
* CSS.
* JavaScript.
* Components.
* Modules.
* Bundles/chunks.
* SVG.
* Canvas code.
* WebGL code.
* Three.js code.
* Shader code.
* Animation code.
* Asset references.

Trace the implementation from:

`Page → Target Container → Target Component → Rendering Layer → Rendered Object`

Identify the code responsible for the target wherever the available evidence allows.

---

## 8. Inspect Runtime Dependencies

Verify actual runtime dependencies, not only declarations.

Inspect:

* Fonts.
* Images.
* SVG assets.
* Textures.
* Models.
* JavaScript modules.
* Network-loaded assets.
* External resources.
* Runtime-generated data.

For fonts, verify actual loading where relevant.

For assets, verify the actual runtime URL/resource where available.

For rendering systems, verify the runtime state required for the object to render correctly.

---

## 9. Inspect State and Motion

Investigate behavior relevant to reproducing the target:

* Initial state.
* Hover state.
* Pointer interaction.
* Scroll interaction.
* Resize behavior.
* Animation.
* Transition.
* Rotation.
* Camera movement.
* Object movement.
* State changes.

Do not assume animation is purely CSS.

Determine whether motion is controlled by:

* CSS.
* JavaScript.
* requestAnimationFrame.
* rendering library state.
* interaction state.
* scroll state.
* another runtime mechanism.

---

## 10. Resolve Contradictions

When source code and runtime behavior disagree:

1. Identify the contradiction.
2. Collect additional runtime/source evidence.
3. Determine which behavior is actually active.
4. Record the conclusion briefly.

Do not silently choose one interpretation.

Runtime behavior is the final authority for what is actually rendered.

---

## 11. Stop Condition

Continue the investigation until the available evidence is sufficient to reproduce the target accurately.

At minimum, establish:

* Structural hierarchy.
* Rendering architecture.
* Relevant geometry.
* Relevant transforms.
* 3D/rendering pipeline.
* Assets and dependencies.
* Runtime state.
* Animation/interaction behavior.
* Source implementation responsible for the target.

Do not continue collecting unrelated information after these are sufficiently established.

---

## 12. Report the Findings

Report only the evidence necessary to reproduce the target.

Use this structure:

### Target

What exact element/object was investigated.

### Structure

Relevant DOM/component hierarchy.

### Rendering

How the object is actually rendered.

### 3D / Geometry

Important dimensions, coordinates, transforms, perspective, camera, projection, or object properties.

### Assets / Dependencies

Required fonts, assets, textures, models, libraries, or runtime resources.

### Behavior

Relevant state, interaction, animation, or transition behavior.

### Source

Relevant source/chunk/component responsible for the implementation.

### Key Evidence

Only the important runtime/source evidence.

### Reproduction Requirements

The minimum verified information required for the next implementation task.

Do not dump:

* full DOM trees
* full CSS
* full source files
* large console outputs
* repeated measurements
* unrelated findings

Only include details that materially affect reproduction.

---

## 13. Evidence Rules

Every important finding must be based on verified inspection evidence.

Clearly distinguish:

* directly observed runtime evidence
* source-code evidence
* inferred behavior

Do not present inference as fact.

Do not claim the target is fully understood until the relevant nested structure and rendering pipeline have been investigated.
```

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

* https://github.com/0n6k4v-Coder/skills/tree/master/google/chrome-devtools-mcp/skills

# User Request

Clone the 3D object that appears directly below the Hero section on the original mtioon.com page.

# Task

## 1. Understand the Scope

1. Read and understand the Context.
2. Read and understand the User Request.
3. Treat this task as an **original-site reverse-engineering task only**.
4. Do not modify the clone.
5. Do not implement or refactor anything.
6. Do not guess or invent implementation details that can be verified through inspection.

---

## 2. Read the Required Skill

Read the specified Chrome DevTools skill file before starting the investigation.

Use the procedures, CLI commands, and tools defined there.

---

## 3. Start and Inspect the Original Site

Use Chrome DevTools CLI directly.

You are responsible for:

* launching the original site when required
* identifying the browser ID
* identifying the relevant page/tab
* executing the required inspection commands
* collecting and analyzing the returned runtime data

Do not ask the user to execute CLI commands for you.

Use the available Chrome DevTools CLI tools directly throughout the investigation.

Exclude image-related tools that require sending images back to the user.

---

## 4. Investigate the Target from Outside-In

Inspect the requested 3D object from:

1. page context
2. Hero section boundary
3. target object container
4. parent hierarchy
5. target object root
6. nested descendants
7. rendering layer
8. runtime state
9. assets and dependencies

Do not stop at the first visible container.

Trace the target recursively until the meaningful implementation structure is understood.

---

## 5. Inspect DOM and Layout

Inspect all information necessary to reproduce the target accurately:

* DOM hierarchy
* parent/child relationships
* relevant classes and attributes
* element types
* computed styles
* box model
* width and height
* position and coordinates
* margin, padding, and gap
* overflow and clipping
* positioning context
* stacking context
* transforms
* transform origin
* perspective
* perspective origin
* relevant CSS 3D properties

Determine which element owns:

* layout
* background/surface
* clipping
* rendering
* interaction

Do not assume ownership from visual appearance alone.

---

## 6. Recursively Investigate the Rendering Pipeline

If the target uses Canvas, WebGL, Three.js, SVG, shaders, generated graphics, or another rendering system, investigate that rendering pipeline directly.

Determine, where applicable:

* rendering surface
* canvas dimensions
* rendering context
* device-pixel-ratio handling
* scene hierarchy
* object hierarchy
* camera
* projection
* position
* rotation
* scale
* transform hierarchy
* lighting
* material
* shader
* texture
* environment/background
* animation state
* interaction state
* render loop
* resize handling

Do not infer the internal rendering structure from the final screenshot alone.

For projected or 3D content, distinguish:

* DOM geometry
* rendering-surface geometry
* object/world coordinates
* camera/projected coordinates
* final visible bounds

---

## 7. Inspect Source and Runtime Implementation

Find the source or bundled runtime code responsible for the target.

Inspect relevant:

* HTML
* CSS
* JavaScript
* components
* modules
* bundles/chunks
* SVG
* Canvas code
* WebGL code
* Three.js code
* shader code
* animation code
* asset references

Trace:

`Page → Target Container → Target Component → Rendering Layer → Rendered Object`

Identify the implementation responsible for the target wherever the available evidence allows.

---

## 8. Inspect Runtime Dependencies

Verify actual runtime dependencies.

Inspect:

* fonts
* images
* SVG assets
* textures
* models
* JavaScript modules
* network-loaded assets
* external resources
* runtime-generated data

For fonts, verify actual loading where relevant.

For assets, verify the actual runtime resource where available.

For rendering systems, verify the runtime state required for correct rendering.

---

## 9. Inspect Behavior and Motion

Investigate only behavior relevant to reproducing the target:

* initial state
* hover
* pointer interaction
* scroll interaction
* resize behavior
* animation
* transition
* rotation
* camera movement
* object movement
* state changes

Determine whether motion is controlled by:

* CSS
* JavaScript
* requestAnimationFrame
* rendering-library state
* interaction state
* scroll state
* another runtime mechanism

Do not assume animation is purely CSS.

---

## 10. Resolve Contradictions

When runtime behavior and source code disagree:

1. identify the contradiction
2. collect additional evidence
3. determine which implementation is actually active
4. record the conclusion briefly

Do not silently choose one interpretation.

Runtime behavior is the authority for what is actually rendered.

---

## 11. Stop Condition

Stop when the verified evidence is sufficient to reproduce the target accurately.

At minimum, establish:

* structural hierarchy
* rendering architecture
* relevant geometry
* relevant transforms
* 3D/rendering pipeline
* assets and dependencies
* runtime state
* animation/interaction behavior
* source implementation responsible for the target

Do not continue collecting unrelated information after these are sufficiently established.

---

## 12. Report Only What Is Needed for Accurate Reproduction

Report the investigation using this structure:

### Target

Exact element/object investigated.

### Structure

Relevant DOM/component hierarchy.

### Rendering

How the target is actually rendered.

### 3D / Geometry

Only important dimensions, coordinates, transforms, perspective, camera, projection, or object properties.

### Assets / Dependencies

Only resources required for reproduction.

### Behavior

Only relevant state, interaction, animation, or transition behavior.

### Source

Relevant source/chunk/component responsible for the implementation.

### Key Evidence

Only evidence that materially proves the findings.

### Reproduction Requirements

The verified information the next implementation task must use.

Do not include:

* full DOM dumps
* full CSS
* full source files
* raw CLI output
* repeated measurements
* unrelated implementation details
* investigation narration

Report the **minimum sufficient evidence required to make the clone accurate**.

---

## 13. Evidence Rules

Every important finding must be supported by verified inspection evidence.

Clearly distinguish:

* directly observed runtime evidence
* source-code evidence
* inferred behavior

Do not present inference as fact.

Do not declare the target understood until the relevant nested structure and rendering pipeline have been investigated.
```

```text
# Context

You are continuing a reverse-engineering and cloning task for:

Repository:
[Repository]

Target file:
[Target File]

Original site:
[Original Site]

Original Investigation Findings:
[Complete Findings Report from Workflow 01]

# User Request

Use the verified Original Investigation Findings to determine exactly what must change in the current clone implementation to reproduce the original target accurately.

# Task

## 1. Understand the Scope

1. Read and understand the Context.
2. Read and understand the User Request.
3. Read and understand the complete Original Investigation Findings.
4. Treat the Findings Report as the reference for the original behavior.
5. Inspect the clone independently to determine how its current implementation differs.
6. Do not modify the clone.
7. Do not implement changes in this workflow.
8. Do not invent implementation details that can be determined from the clone source.

---

## 2. Inspect the Clone Source

Inspect the current clone implementation from outside-in and root-to-leaf.

Start from:

1. target page/editor context
2. target root
3. parent hierarchy
4. relevant sections
5. nested components
6. controls/items
7. rendering layer
8. state and interaction logic
9. rendering dependencies

Inspect where relevant:

* HTML
* CSS
* JavaScript
* components
* DOM structure
* classes and attributes
* computed/runtime assumptions
* layout ownership
* paint ownership
* clipping/overflow
* scrolling
* positioning
* transforms
* typography
* assets
* Canvas/SVG/WebGL/3D implementation
* state logic
* event handling
* animation/transition logic

Do not inspect unrelated implementation.

---

## 3. Recursively Inspect Nested Components

Trace the requested target recursively.

For each meaningful nested component determine:

* component boundary
* parent dependency
* child structure
* layout ownership
* state ownership
* rendering ownership
* interaction behavior

Do not assume a child is correct because its parent is correct.

When a mismatch exists, identify the **first meaningful divergence** between the original findings and the clone implementation.

---

## 4. Compare Original Findings Against Clone

Compare the verified Original Findings against the actual clone implementation.

Classify meaningful differences as:

* structure
* hierarchy
* layout
* geometry
* paint
* typography
* asset
* rendering dependency
* state
* interaction
* animation
* rendering pipeline
* 3D/object behavior

Do not compare only visual appearance.

Use the original findings to determine what the clone must reproduce.

---

## 5. Identify the First Divergence

For each important mismatch:

1. locate the relevant original behavior from the Findings Report
2. locate the clone implementation responsible for that behavior
3. compare the two recursively
4. identify the first meaningful divergence
5. trace downstream symptoms back to that divergence

Do not define changes from the deepest visible symptom when an earlier structural cause exists.

---

## 6. Inspect Rendering Dependencies

When a mismatch depends on rendering, inspect the clone's actual implementation.

Verify where applicable:

* fonts
* icons
* images
* SVG
* Canvas
* WebGL
* 3D objects
* shaders
* textures
* animation systems
* runtime-generated content

Determine whether the mismatch is caused by:

* missing dependency
* wrong dependency
* wrong structure
* wrong runtime state
* wrong rendering configuration
* incorrect fallback
* incorrect geometry

Do not propose hard-coded visual compensation for a dependency or structural problem.

---

## 7. Define the Exact Change

For every confirmed mismatch, define exactly:

* file
* component/section
* selector/function/block
* current implementation
* required implementation
* reason for the change
* dependency on other changes
* expected effect
* verification method

The change definition must be specific enough that another agent can implement it without making architectural decisions.

Do not use vague instructions such as:

* "make it look like production"
* "fix the spacing"
* "improve the panel"
* "adjust the layout"

Replace them with concrete implementation changes.

---

## 8. Define Change Boundaries

Clearly identify:

### Must Change

Changes required for the target to match the original.

### Must Preserve

Existing behavior/implementation that should remain unchanged.

### Out of Scope

Related areas that must not be modified.

Do not expand the implementation scope beyond what the Findings Report requires.

---

## 9. Check Change Dependencies

Determine whether one change affects another.

For example:

* parent layout → child geometry
* font loading → text dimensions
* container width → nested control dimensions
* rendering surface → 3D object geometry
* state structure → nested controls
* asset dependency → visual output

Group dependent changes together.

Do not split one root-cause fix into unrelated cosmetic patches.

---

## 10. Define Verification Requirements

For every proposed change, define how the next implementation task must verify it.

Use the appropriate verification type:

* DOM structure
* geometry
* computed style
* runtime state
* interaction
* asset loading
* font loading
* rendering
* visual comparison
* Canvas/WebGL/3D state

Verification must prove the change solved the identified divergence.

Do not define verification from screenshots alone when direct runtime evidence is available.

---

## 11. Stop Condition

Stop when every meaningful mismatch from the Original Findings has been mapped to:

* exact clone location
* root cause
* exact required change
* required verification

Do not continue investigating unrelated clone code after the requested target is fully mapped.

---

## 12. Report the Required Changes

Report only the information needed for the next implementation task.

Use this structure:

### Comparison Summary

The important differences between Original and Clone.

### First Divergence

The earliest meaningful implementation divergence.

### Required Changes

For each change:

**Location**
Exact file/component/selector/function.

**Current**
What the clone currently does.

**Required**
What it must do instead.

**Reason**
Why this change is required by the original findings.

**Verification**
How the implementation must be verified.

### Change Dependencies

Only dependencies that affect implementation order or correctness.

### Scope Boundary

What must be preserved and what is out of scope.

### Implementation Requirements

The concise set of concrete changes that the next execution task must perform.

Do not include:

* full source dumps
* full DOM dumps
* repeated findings
* investigation narration
* speculative redesigns
* unrelated improvements

Report the **minimum sufficient implementation specification required to make the clone accurate**.

---

## 13. Evidence Rules

Every required change must be traceable to:

* Original Investigation Findings
* clone source evidence
* or both

Clearly distinguish:

* directly observed clone evidence
* original runtime evidence
* source-code evidence
* inferred implementation dependency

Do not present inference as verified fact.

Do not define a change unless the responsible clone implementation area has been identified.

---

## 14. Output Constraint

This workflow must produce a **Change Specification**, not an implementation.

The final report must allow the next workflow to execute the changes without requiring additional architecture or design decisions.
```

```text
# Context

You are continuing a reverse-engineering and cloning task for:

Repository:
[Repository]

Target file:
[Target File]

Original site:
[Original Site]

Original Investigation Findings:
[Workflow 01 Findings]

Approved Change Specification:
[Workflow 02 Approved Change Specification]

# User Request

Proceed with the approved changes defined in the Change Specification and make the clone accurately reproduce the original target.

# Task

## 1. Understand the Scope

1. Read and understand the Context.
2. Read and understand the Original Investigation Findings.
3. Read and understand the Approved Change Specification.
4. Treat the Approved Change Specification as the implementation authority.
5. Do not redesign the solution.
6. Do not invent alternative implementation approaches when the specification already defines the required change.
7. Do not modify unrelated functionality.

---

## 2. Inspect the Current Implementation

Inspect the current clone implementation relevant to the approved changes.

Confirm:

* target files
* target components
* current implementation
* current affected hierarchy
* existing dependencies
* current state before modification

Do not re-investigate the original site unless the approved specification explicitly requires it.

---

## 3. Implement the Approved Changes

Apply the approved changes exactly.

Preserve existing behavior outside the approved scope.

When multiple changes are dependent:

* implement the root/structural change first
* implement dependent changes afterward
* avoid cosmetic compensation for structural problems

Do not introduce:

* unrelated refactors
* speculative improvements
* unnecessary architecture changes
* hard-coded compensation for missing dependencies

---

## 4. Preserve Existing Functionality

Verify that the changes do not unintentionally break:

* surrounding layout
* existing interactions
* shared components
* related controls
* existing states
* unrelated editor functionality

Only modify behavior required by the approved specification.

---

## 5. Verify Each Approved Change

Verify every required change independently.

Use the verification method defined by the Change Specification.

Where relevant, verify:

* DOM structure
* hierarchy
* geometry
* computed styles
* typography
* fonts
* assets
* runtime state
* interaction
* animation
* rendering
* Canvas/WebGL/3D state
* visual output

Use direct runtime evidence when available.

Do not use screenshot appearance as the only proof when the required property can be verified directly.

---

## 6. Recursive Verification

After implementation, verify from outside-in:

1. target context
2. target root
3. parent hierarchy
4. changed component
5. nested descendants
6. rendering dependencies
7. behavior/state
8. final visual output

Do not declare a parent match while a relevant nested component remains incorrect.

---

## 7. Regression Check

Check relevant functionality affected by the changes.

Verify that:

* existing behavior remains intact
* unrelated UI is unchanged
* shared dependencies are not unintentionally broken
* the approved change does not introduce downstream regressions

Keep regression scope proportional to the approved changes.

---

## 8. Resolve Implementation Problems

If the approved specification cannot be implemented as written:

1. identify the exact blocker
2. determine whether it is caused by the current clone implementation
3. make only the smallest change necessary to satisfy the approved specification
4. do not redesign the approved solution

If implementation still cannot proceed without a new architectural decision, stop that part and report the blocker instead of inventing one.

---

## 9. Completion Gate

The task is complete only when:

* every approved change has been implemented
* every required verification passes
* relevant nested components have been checked
* relevant rendering dependencies have been checked
* relevant behavior has been checked
* relevant regressions have been checked
* no unrelated changes were introduced

---

## 10. Report Only the Result

Report using this structure:

### Changes Applied

Only the changes that were actually implemented.

### Verification

For each important change:

**Change**
What was changed.

**Evidence**
The key post-change evidence.

**Status**
PASS / FAIL / BLOCKED.

### Remaining Mismatches

Only meaningful unresolved issues.

### Regression

Only relevant regressions or confirmation that affected functionality remains intact.

### Status

One of:

* COMPLETE
* PARTIAL
* BLOCKED

Do not include:

* full source dumps
* raw CLI output
* investigation narration
* repeated measurements
* unrelated implementation details

Report only the evidence necessary to establish whether the approved changes were successfully implemented.
```

```text
## Variable-Length Structure Rule

Do not force lists, steps, sections, or report fields to have equal or predetermined counts.

The number of items must be determined by the actual scope and complexity of the task.

Rules:

* Add an item only when it has a distinct purpose.
* Remove an item when its responsibility is already covered elsewhere.
* Do not add items merely to make a list symmetrical.
* Do not split one responsibility into multiple items only to increase count.
* Do not merge distinct responsibilities only to reduce count.
* Prefer the smallest complete set of items required for the task.
* Different workflows, tasks, and reports may legitimately have different numbers of items.
* Optimize for coverage, traceability, and clarity, not structural symmetry.
* Count should be an output of decomposition, not an input to decomposition.
```
