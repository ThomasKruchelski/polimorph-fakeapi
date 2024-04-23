import { NextResponse } from "next/server";

export async function GET(req, res) {
  const fakeData = {
    id: 2,
    name: 'Embalde',
    slug: 'Embalde',
    logo: 'https://firebasestorage.googleapis.com/v0/b/governante-b9ff1.appspot.com/o/tenants-imagens%2Fembalde%2Flogo.png?alt=media&token=6ccaed1e-9f94-42ee-8596-09cccf356443',
    iconAndroid: 'https://firebasestorage.googleapis.com/v0/b/governante-b9ff1.appspot.com/o/tenants-imagens%2Fembalde%2Fadaptive-icon.png?alt=media&token=dc6dc959-5831-438a-ab2a-35f699a7f1f4',
    iconIos: 'https://firebasestorage.googleapis.com/v0/b/governante-b9ff1.appspot.com/o/tenants-imagens%2Fembalde%2Ficon.png?alt=media&token=3adccfee-8687-48af-a4d7-5a584fef8554',
    splash: 'https://firebasestorage.googleapis.com/v0/b/governante-b9ff1.appspot.com/o/tenants-imagens%2Fembalde%2Fadaptive-icon.png?alt=media&token=dc6dc959-5831-438a-ab2a-35f699a7f1f4',
    theme: {
      primary: '#a8b16b',
      secundary: '#747b47',
      text: '#ffffff'
    }
  };

  // Retorna os dados como JSON
  return NextResponse.json(fakeData)
}