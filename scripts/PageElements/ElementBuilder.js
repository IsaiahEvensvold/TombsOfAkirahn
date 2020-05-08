

export function attachChildren( parent, children ) {
    if (children) {

        for (var i = 0; i < children.length; i++) {
            parent.appendChild(children[i]);
        }

    }
}