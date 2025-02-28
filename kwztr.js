const doztr = require('./doztr.js');
// const u_to_a = require('./u_to_a.js');
// const a5_to_a8 = require('./a5_to_a8.js');
// const a8_to_a5 = require('./a8_to_a5.js');
// const a5_to_a54 = require('./a5_to_a54.js');
class kwztr {
  transliterate_dom_node(node_arg, ztr_direction_const="u_to_i") {
    let dikt_pair_list = [];
    let curr_dikt_pair = null;
    let curr_node_text = "";
    let text = "";
    let nekst_node = null;
    let ztred_span_list = null;
    let nekst_ztred_span = null;
    let nodeIterator = node_arg.ownerDocument.createNodeIterator(
        node_arg,
        NodeFilter.SHOW_TEXT,
        { acceptNode: (node) => { if (node.parentNode && node.parentNode.nodeName !== 'SCRIPT') { return NodeFilter.FILTER_ACCEPT; } } },
        false
    );

    nekst_node = nodeIterator.nextNode() ;
    while (nekst_node) {
      dikt_pair_list.push({ tekstNode: nekst_node, start: text.length });
      text += nekst_node.nodeValue;
      nekst_node = nodeIterator.nextNode()
    }
    if (!dikt_pair_list.length) return;
    for (let i = 0; i < dikt_pair_list.length; ++i) { curr_dikt_pair = dikt_pair_list[i];
      curr_node_text = curr_dikt_pair.tekstNode.textContent;
      var spanNode = document.createElement("span");
      spanNode.className = "ztred";
      spanNode.dataset.oldtekst = curr_node_text;
      curr_dikt_pair.tekstNode.parentNode.replaceChild(spanNode, curr_dikt_pair.tekstNode);
      spanNode.appendChild(curr_dikt_pair.tekstNode);
    }
    ztred_span_list = node_arg.getElementsByClassName('ztred');
    // below from zava8.github.io
    // const otekst = ref("");
    // const itekst = ref("");
    // const ztrdir = ref("");
    // const ioz = { i: itekst , o: otekst , z: ztrdir } ;
    // above from zava8.github.io
    switch(ztr_direction_const) {
      case "u_to_i" :
        for (let i = 0; i < ztred_span_list.length; ++i)
        {
          nekst_ztred_span = ztred_span_list[i];
          let ioz = { i: nekst_ztred_span.textContent , o: "" , z: ztr_direction_const } ;
          doztr(ioz);
          nekst_ztred_span.textContent = ioz.o;
          // nekst_ztred_span.textContent = u_to_a(nekst_ztred_span.textContent,false);
        }
        break;
    }
  }
  untransliterate_dom_node() {
    let nodes = document.getElementsByClassName('ztred');
    let node = null;
    for (let i = 0;i < nodes.length;i++) {
      node = nodes[i];
      if(node.innerText.charCodeAt(0) != node.innerText.charCodeAt(0)) continue ;
      node.innerText = node.dataset.oldtekst;
    }
  }
  transliterate(unicodestr,ztr_direction_const="u_to_i") {
    let ioz = { i: unicodestr , o: "" , z: ztr_direction_const } ;
    doztr(ioz);
    return(ioz.o);
  }
}
module.exports = kwztr
