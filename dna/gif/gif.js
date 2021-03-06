
/*========================================
=            Public functions            =
========================================*/

function gifPut(payload) {
  var gifHash = commit('gif',payload);
  var tagHash = '';
  payload.tags.forEach(function(tag) {
    tagHash = commit('tag', tag);
    debug(tag + " committed")
    commit('tagLink', {
      Links: [ { Base: tagHash, Link: gifHash, Tag: '' } ]
    });
  });
  return tagHash;
}

function gifFind(payload) {
  var results = [];
  payload.tags.forEach(function(tag) {
    var hash;
    try {
      hash = makeHash('tag', tag)
      getLinks(hash, '', { Load: true}).forEach(function(gif) {
        results.push(gif);
      })
    } catch(e) {
      debug("searching for a tag that does not exist: " + tag)
      debug(e);
    }

  });
  return results;
}

/*=====  End of Public functions  ======*/



// Cast you first Vote and save it locally

function genesis() {
  return true;
}

function validatePut(entry_type,entry,header,pkg,sources) {
  return validateCommit(entry_type,entry,header,pkg,sources);
}
function validateCommit(entry_type,entry,header,pkg,sources) {
    return true;
}

function validateLink(linkingEntryType,baseHash,linkHash,pkg,sources){
  return true;
}
function validateMod(entry_type,hash,newHash,pkg,sources){
  return true;
}
function validateDel(entry_type,hash,pkg,sources) {
  return true;
}
function validatePutPkg(entry_type) {
  return null;
}
function validateModPkg(entry_type) {
  return null;
}
function validateDelPkg(entry_type) {
  return null;
}
function validateLinkPkg(entry_type) {
  return null;
}

function validateLink(entryType, hash, links, pkg, sources) {
  return true;
}

function validateDelPkg (entryType) {
return null;
}
