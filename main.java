FileUtils.copyURLToFile(
  new URL(FILE_URL), 
  new File(FILE_NAME), 
  CONNECT_TIMEOUT, 
  READ_TIMEOUT);



package com.journaldev.files;


import java.io.BufferedInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URL;
import java.nio.channels.Channels;
import java.nio.channels.ReadableByteChannel;

public class JavaDownloadFileFromURL {

    public static void main(String[] args) {
        String url = "https://www.journaldev.com/sitemap.xml";
        
        try {
            downloadUsingNIO(url, "/Users/pankaj/sitemap.xml");
            
            downloadUsingStream(url, "/Users/pankaj/sitemap_stream.xml");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

