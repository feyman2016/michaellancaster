---
layout: post
title: Sublime Text 3 jump to definition/method

excerpt: Quick blog post to show you how to easily add the feature goto or jump to definition on Sublime text 3 with custom shortcut.
---

Quick blog post to show you how to easily add the feature goto or jump to definition on Sublime text 3 with custom shortcut

<div class="fluidImg">
    <img src="/assets/images/post-images/st3-goto-definition.gif" alt="Sublime Text 3 jump to definition/method">
</div>

## Simple steps

In Sublime Text 3
<pre><code data-language="HTML">
Sublime Text -> Preferences -> Key Bindings - User
</code></pre>

Add the code below..

<pre><code data-language="Javascript">
[
    { "keys": ["shift+command+m"], "command": "goto_definition" }
]
</code></pre>

Save it and you are done. (ps: if did not work restart your Sublime Text 3).

Thanks.