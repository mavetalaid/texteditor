using System;
using System.IO;
using System.Linq;
using System.Text;
using System.IO.Compression;

namespace CSiDetailPublish
{
    class Program
    {
        private static string[] exclude = { "js/app/" };

        static void Main(string[] args)
        {
            string directory = AppDomain.CurrentDomain.BaseDirectory;
            directory = directory.Replace(@"publish\bin\Debug\", "");

            string publish = directory + @"api\";

            var html = File.ReadAllText(directory + "index.html");
            var lines = html.Split(new string[] { Environment.NewLine }, StringSplitOptions.RemoveEmptyEntries);
            var output = new StringBuilder();
            var htmlcode = new StringBuilder();
            var css = new StringBuilder();
            var added = false;
            var cssadded = false;

            foreach (var line in lines)
            {
                if (line.Contains("<script "))
                {
                    var start = line.IndexOf("src=") + "src=".Length + 1;
                    var end = line.IndexOf(".js") + 3;
                    var file = line.Substring(start, end - start);
                    var handle = true;

                    foreach (var exc in exclude)
                    {
                        if (file.Contains(exc))
                        {
                            handle = false;
                            break;
                        }
                    }

                    if (handle) 
                    {
                        var text = File.ReadAllText(directory + file);
                        output.AppendLine(text);

                        if (!added)
                        {
                            added = true;
                            htmlcode.AppendLine(@"        <script type='text/javascript' src='api/unep.js'></script>");
                        }
                    }
                }
                else if (line.Contains("stylesheet"))
                {
                    var start = line.IndexOf("href=") + "href=".Length + 1;
                    var end = line.IndexOf(".css") + 4;

                    if (end >= start)
                    {
                        var file = directory + line.Substring(start, end - start);

                        if (File.Exists(file))
                        {
                            var text = File.ReadAllText(file);

                            css.AppendLine(text);

                            if (!cssadded)
                            {
                                cssadded = true;
                                htmlcode.AppendLine(@"        <link rel='stylesheet' href='api/unep.css'/>");
                            }
                        }
                    }
                }
                else
                {
                    htmlcode.AppendLine(line);
                }
            }

            if (!Directory.Exists(publish))
            {
                Directory.Delete(publish, true);
                Directory.CreateDirectory(publish);
            }

            var api = File.ReadAllText(directory + "js/app/api.js");
            output.AppendLine(api);

            File.WriteAllText(publish + @"unep.css", css.ToString());
            File.WriteAllText(publish + @"unep.js", output.ToString());
            //File.WriteAllText(publish + @"index.html", htmlcode.ToString());
        }

        static void CopyFiles(string directory, string publish, string path)
        {
            foreach (var dir in Directory.EnumerateDirectories(path))
            {
                var split = dir.Split(new string[] { @"\" }, StringSplitOptions.RemoveEmptyEntries);

                if (directory == path)
                {
                    if (!exclude.Contains(split[split.Count() - 1]))
                    {
                        CopyFiles(directory, publish, dir);
                    }
                }
                else 
                {
                    CopyFiles(directory, publish, dir);
                }
            }

            var destination = publish + path.Replace(directory, "");

            if (!Directory.Exists(destination))
            {
                Directory.CreateDirectory(destination);
            }

            foreach (var file in Directory.EnumerateFiles(path))
            {
                var folder = file.Replace(directory, "");

                if (folder.Substring(folder.Length - 4) != ".map" && folder.Substring(folder.Length - 5) != ".json")
                {
                    File.Copy(file, publish + folder, true);
                }
            }
        }
    }
}
