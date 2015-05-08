(function() {

    function walk(node) {
        var child, next;

        switch(node.nodeType) {
            case 1:  // Element
            case 9:  // Document
            case 11: // Document fragment
                child = node.firstChild;
                while(child) {
                    next = child.nextSibling;
                    walk(child);
                    child = next;
                }
                break;

            case 3: // Text node
                if(node.parentElement.tagName.toLowerCase() != "script") {
                    handleText(node);
                }
                break;
        }
    }


    function handleText(textNode) {
        var v = textNode.nodeValue;

        // Hen
        v = v.replace(/\b(H|h)(a|o)n\b/g, function(match, p1, offset, string) {
            return p1 + "en";
        })

        // Henom
        v = v.replace(/\b(H|h)(enne|onom)\b/g, function(match, p1, offset, string) {
            return p1 + "enom";
        })

        // Hens
        v = v.replace(/\b(H|h)(enne|an)s\b/g, function(match, p1, offset, string) {
            return p1 + "ens";
        })

        textNode.nodeValue = v;
    }


    walk(document.body);

}());
