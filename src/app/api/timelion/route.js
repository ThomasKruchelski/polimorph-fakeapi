import { NextResponse } from "next/server";
export async function GET(req, res) {
    const fakeData = {
      id: 3,
      name: 'Timelion',
      slug: 'timelion',
      logo:'https://firebasestorage.googleapis.com/v0/b/governante-b9ff1.appspot.com/o/tenants-imagens%2Ftimelion%2Flogo-timelion-header.png?alt=media&token=18eec585-742c-49d5-9a9f-6dedebae777c',
      iconAndroid: 'https://firebasestorage.googleapis.com/v0/b/governante-b9ff1.appspot.com/o/tenants-imagens%2Ftimelion%2Fadaptive-icon.png?alt=media&token=0eee8d5e-ab19-4544-ab7e-81aa7d95050a',
      iconIos: 'https://firebasestorage.googleapis.com/v0/b/governante-b9ff1.appspot.com/o/tenants-imagens%2Ftimelion%2Ficon.png?alt=media&token=4a3b20cf-8cd1-43d8-9a03-01d9d73f1ffb',
      splash: 'https://firebasestorage.googleapis.com/v0/b/governante-b9ff1.appspot.com/o/tenants-imagens%2Ftimelion%2Fsplash.png?alt=media&token=fa98e083-c87d-4342-9571-ae13ea4c6a13',
      theme:{
        primary:'#B60439',
        secundary:'#8B032C',
        text:'#ffffff'
      }
    };
  
    // Retorna os dados como JSON
    return NextResponse.json(fakeData)
  }