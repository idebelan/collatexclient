// --- Mobile Applications Project - Fulda University 2015/2016
// 
// --- Web-sockets CONTENT PATTERN ---
// --- UNIQUE-CLIENT-ID+DATA ---


var iAppCounter = 0;
var iSockCounter = 0;
var iArrayCmdCounter = 0;

// --- WEB interface commands set ---
var clientsLIST   = [ 'ivan', 'sidra', 'sami', 'zain', 'soulemane', 'yvonne', 'hs-fulda' ] ; 
var cmdListCS     = [ 'client_open', 'send_char', 'send_line', 'save_doc', 'convert_doc_pdf', 'getLXdocs',
                      'requre_edit', 'edit_allowed', 'edit_denied', 'news', 'get_file'  ] ; 
var cmdListSS     = [ 'propg_char', 'propg_line', 'avail_docs', 'alert_doc_edit', 'lastLXedited', 'no_news',
                      'deliver_doc', 'doc_saved', 'doc_converted'  ] ; 
                      
                      
app.get('/', function(req, res){

  var request = url.parse(req.url, true);
  var action = request.pathname;

  if (action == '/hochschule_fulda_logo.jpg') {
     var img = fs.readFileSync('./hochschule_fulda_logo.jpg');
     res.writeHead(200, {'Content-Type': 'image/gif' });
     res.end(img, 'binary');
  } // if
  else { 
     res.sendFile(__dirname +  '/index.html');     
  } // else

  console.log('some user requested the web-page: call-count=' + iAppCounter );
  iAppCounter ++ ;
});



             
http.listen( 3000, function(){
  console.log('listening on *:3000');
});
