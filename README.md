# OxTLator
 MultiLanguages (All in One)

- Demo:

   https://oxigen1001.github.io/OxTLator/

- Features:
  1. Page with multi languages.
  2. Work with any server langage (java,C#,php ...).
  3. Easy to use.
  4. Selected language saved in local storage.
  5. no refresh.

- When can i use OxTLator ?
  
  whenever you want, just you have to organize you data with json file or with endpoint ...
  for me i used for my management application (edit,save,delete,home,about,help,sort,...) labels
- Usage:
  1. index.html :
  
         <html>
         <body>
           <div id="root"></div>
           <script src="path-of-lib/oxtlator.min.js"></script>
           <script>
              OxTLator("exemple.html",{
              path:"data.json" //endpoint of data (json)
            });
           </script>
         </body>
         </html>
   2. exemple.html :
   
          <h3>{{title}}</h3>
          <p>{{Lorem}}</h3>
          
   3. data.json
   
          [
           {
             "id":"title",
             "data":{
              "en":"This is not an Example :",
              "fr":"Ce n'est pas un exemple :",
              "ar":"هذا ليس مثالاً :",
             }
           },
           {
           "id":"Lorem",
           "data":{
           "en":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, officia? Quod aliquam ducimus quidem ea repellendus totam! Necessitatibus dignissimos, qui facere in molestiae dolores quo, animi temporibus beatae autem fugiat!",
           "ar":"أبجد هوز دولور الجلوس امات consectetur، والحسومات. المسؤوليات؟ التي تقودها أي واحد كما لو أنها رفضت كلها! لضرورات الذين هم الأجدر لجعل الانزعاج والألم، الذي، الذين، في وقت العذراء المباركة، ومع ذلك، لم يهرب من الروح!",
           "fr":"Lorem ipsum dolor sit amet consectetur, des rabais. Les responsabilités? Ce quelqu'un est conduit comme si elle a refusé de l'ensemble! Pour les besoins de qui sont les plus dignes de faire l'inconfort et de la douleur, qui, qui, dans le temps de la revanche, Sainte Vierge, qui fuit devant l'âme!"
           }
           }
          ]
- Conclusion
any suggest/bug/question please contact me on :

   [LinkedIn](https://www.linkedin.com/in/messaoudi-mohammed/)

   [Twitter](https://twitter.com/OxiGen95061430/)

   [Facebook](https://facebook.com/mDevBoy/)

   [Mail](mailto:xl7061@gmail.com) 
   
   or add an Issue :)
