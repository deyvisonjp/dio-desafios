using DesafioPOO.Models;

Smartphone smartphoneNokia = new Nokia("55 32 99999-0000", "Pixel 10", "356789012345678", 128);
Smartphone smartphoneIphone = new Iphone("55 32 98888-1111", "iPhone 14", "867530986753098", 256);

smartphoneNokia.Ligar();
smartphoneNokia.InstalarAplicativo("FinanFresh");

Console.WriteLine("--------------------------------");

smartphoneIphone.Ligar();
smartphoneIphone.InstalarAplicativo("FinanFresh");
smartphoneIphone.ReceberLigacao();
