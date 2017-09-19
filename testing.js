<script type="text/javascript">
    $(document).ready(function(){
      var values = [];
      var operation = null;
      $('.wrapper .btn').click(function(){
          var op = $(this).attr('value');
          var dir = $(this).attr('rel');
          if(op == 'number'){
             $('#print').append(dir);
          }
          else if(op == 'operator'){
            $('#print').append(dir);
            values.push($('#print').text());
            values.push(dir);
          }
          else if(op == 'equals'){
            $.each( arr, function( i, val){
              var result = 0;
              var currenyitem = 0;
              var previtem = 0;
              var item = $("#" + val).text()
              if(item == '/' or item == '*' or item == '+' or item == '-'){
                operation = item;
                previtem = currenyitem;
                currenyitem = 0;
              }
              else{
                if(operation == '+') {
                  result = previtem + currenyitem;
                  $('#printResult').val(result);
                  operation = null;
                }
                if(operation == '-') {
                  result = previtem - currenyitem;
                  $('#printResult').val(result);
                  operation = null;
                }
                if(operation == '*') {
                  result = previtem * currenyitem;
                  $('#printResult').val(result);
                  operation = null;
                }
                if(operation == '/') {
                  result = previtem / currenyitem;
                  $('#printResult').val(result);
                  operation = null;
                }
                else{
                  currenyitem = parseint(item);
                }
              }
            });
          }
        });
    });
    </script>