<html><head>
<HTA:APPLICATION 
            ID              = "testHTA" 
            APPLICATIONNAME = "testHTA"
            VERSION         = "0.1"
            NAVIGABLE       = "yes"
            SHOWINTASKBAR   = "yes" 
            SINGLEINSTANCE  = "yes" 
            WINDOWSTATE     = "normal"
            BORDER          = "normal" 
            BORDERSTYLE     = "normal"
            INNERBORDER     = "no"    
            CAPTION         = "yes" 
            MINIMIZEBUTTON  = "yes"
            MAXIMIZEBUTTON  = "yes"
            SYSMENU         = "yes" 
            SCROLL          = "yes" 
            SCROLLFLAT      = "yes"    
            CONTEXTMENU     = "yes"
            SELECTION       = "yes"
        />
</head>
  <script language="VBScript" type="text/VBScript">
      Function MyInputBox(filename) 
         a = InputBox("What is the path to the file to parse", ,filename)
         msgbox a 
      End Function
  </script>
  <script language="VBScript" type="text/VBScript">
     Function LoadStringFromFile(fileIn, fileOut, fsoForReading, fsoForWriting)
	 
		Dim wshShell
		Dim fso: Set fso = CreateObject("Scripting.FileSystemObject")
		Dim filestreamIN: Set filestreamIN = fso.OpenTextFile(fileIn,fsoForReading)
		Dim OutputHTML : Set OutputHTML = fso.CreateTextFile(fileOut, fsoForWriting)
		Dim fc : fc = filestreamIN.ReadAll : filestreamIN.close : Dim fcArray : fcArray = Split(fc, vbCrLf)
		
		Set wshShell = CreateObject("WScript.Shell")
	
		OutputHTML.WriteLine "<html>"
	OutputHTML.Writeline "<body>"
	OutputHTML.WriteLine "<table BORDER=1>"
	Dim opArray() : ReDim opArray(0)
		For Each row In fcArray
			Dim tmp: tmp = Split(row, ";")
				For ent=0 To UBound(tmp)
					If ent  > UBound(opArray) Then
						ReDim Preserve opArray(UBound(opArray)+1)
						opArray(ent) = Trim(tmp(ent))
					Else
						If Len(opArray(ent)) > 0 Then
							OutputHTML.WriteLine "<tr>"
							opArray(ent) = opArray(ent) & " " & Trim(tmp(ent))
							OutputHTML.WriteLine "</tr>"
						Else
						opArray(ent) = Trim(tmp(ent))
						End If
					End If
				Next
		Next

	OutputHTML.WriteLine "</table>"
	OutputHTML.WriteLine "</body>"
	OutputHTML.WriteLine "</html>"
	OutputHTML.Write Join(opArray, vbCrLf) : OutputHTML.Close

	wshShell.Run fileOut
   
	End Function
 
 
  </script>
<script language="VBScript" type="text/VBScript">
 fileIn = "Data.txt"
 fileOut = "TableData.html"
 Const fsoForReading = 1
 Const fsoForWriting = 2

MyInputBox fileIN
' Call LoadStringFromFile(fileIn, fsoForReading)
 file = LoadStringFromFile(fileIn, fileOut, fsoForReading, fsoForWriting)

</script>
</html>