import { NextResponse } from "next/server";
export async function GET(req, res) {
    const fakeData = {
      id: 1,
      name: 'Lunnar Team',
      slug: 'EPG',
      logo:'https://firebasestorage.googleapis.com/v0/b/governante-b9ff1.appspot.com/o/tenants-imagens%2Flunnar%2Flogo-coroa.svg?alt=media&token=d5446079-3ea1-452b-80b5-a2c787415bb4',
      iconAndroid: 'https://firebasestorage.googleapis.com/v0/b/governante-b9ff1.appspot.com/o/tenants-imagens%2Flunnar%2Fadaptive-icon.png?alt=media&token=1dc66f1f-a6e4-4ed8-aab2-497a00d5fa37',
      iconIos: 'https://firebasestorage.googleapis.com/v0/b/governante-b9ff1.appspot.com/o/tenants-imagens%2Flunnar%2Ficon.png?alt=media&token=1cfbfbb3-1c93-45f3-8800-fdddef344d69',
      splash: 'https://firebasestorage.googleapis.com/v0/b/governante-b9ff1.appspot.com/o/tenants-imagens%2Flunnar%2Fsplash.png?alt=media&token=69727028-9ebc-4747-b0aa-e967d053158d',
      theme:{
        primary:'#008AA8',
        secundary:'#161C2F',
        text:'#ffffff'
      }
    };
  
    // Retorna os dados como JSON
    return NextResponse.json(fakeData)
  }