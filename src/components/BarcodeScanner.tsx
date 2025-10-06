import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, X, History, Scan, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ScanResult {
  id: string;
  format: string;
  rawValue: string;
  timestamp: Date;
}

interface ProductDetails {
        _id: string,
        _keywords: string[],
        brands: string,
        categories: string,
/*         "ecoscore_data": {
            "adjustments": {
                "origins_of_ingredients": {
                    "aggregated_origins": [
                        {
                            "epi_score": 0,
                            "origin": "en:unknown",
                            "percent": 100,
                            "transportation_score": 0
                        }
                    ],
                    "epi_score": 0,
                    "epi_value": -5,
                    "origins_from_categories": [
                        "en:unknown"
                    ],
                    "origins_from_origins_field": [
                        "en:unknown"
                    ],
                    "transportation_score": 0,
                    "transportation_scores": {
                        "ad": 0,
                        "al": 0,
                        "at": 0,
                        "ax": 0,
                        "ba": 0,
                        "be": 0,
                        "bg": 0,
                        "ch": 0,
                        "cy": 0,
                        "cz": 0,
                        "de": 0,
                        "dk": 0,
                        "dz": 0,
                        "ee": 0,
                        "eg": 0,
                        "es": 0,
                        "fi": 0,
                        "fo": 0,
                        "fr": 0,
                        "gg": 0,
                        "gi": 0,
                        "gr": 0,
                        "hr": 0,
                        "hu": 0,
                        "ie": 0,
                        "il": 0,
                        "im": 0,
                        "is": 0,
                        "it": 0,
                        "je": 0,
                        "lb": 0,
                        "li": 0,
                        "lt": 0,
                        "lu": 0,
                        "lv": 0,
                        "ly": 0,
                        "ma": 0,
                        "mc": 0,
                        "md": 0,
                        "me": 0,
                        "mk": 0,
                        "mt": 0,
                        "nl": 0,
                        "no": 0,
                        "pl": 0,
                        "ps": 0,
                        "pt": 0,
                        "ro": 0,
                        "rs": 0,
                        "se": 0,
                        "si": 0,
                        "sj": 0,
                        "sk": 0,
                        "sm": 0,
                        "sy": 0,
                        "tn": 0,
                        "tr": 0,
                        "ua": 0,
                        "uk": 0,
                        "us": 0,
                        "va": 0,
                        "world": 0,
                        "xk": 0
                    },
                    "transportation_value": 0,
                    "transportation_values": {
                        "ad": 0,
                        "al": 0,
                        "at": 0,
                        "ax": 0,
                        "ba": 0,
                        "be": 0,
                        "bg": 0,
                        "ch": 0,
                        "cy": 0,
                        "cz": 0,
                        "de": 0,
                        "dk": 0,
                        "dz": 0,
                        "ee": 0,
                        "eg": 0,
                        "es": 0,
                        "fi": 0,
                        "fo": 0,
                        "fr": 0,
                        "gg": 0,
                        "gi": 0,
                        "gr": 0,
                        "hr": 0,
                        "hu": 0,
                        "ie": 0,
                        "il": 0,
                        "im": 0,
                        "is": 0,
                        "it": 0,
                        "je": 0,
                        "lb": 0,
                        "li": 0,
                        "lt": 0,
                        "lu": 0,
                        "lv": 0,
                        "ly": 0,
                        "ma": 0,
                        "mc": 0,
                        "md": 0,
                        "me": 0,
                        "mk": 0,
                        "mt": 0,
                        "nl": 0,
                        "no": 0,
                        "pl": 0,
                        "ps": 0,
                        "pt": 0,
                        "ro": 0,
                        "rs": 0,
                        "se": 0,
                        "si": 0,
                        "sj": 0,
                        "sk": 0,
                        "sm": 0,
                        "sy": 0,
                        "tn": 0,
                        "tr": 0,
                        "ua": 0,
                        "uk": 0,
                        "us": 0,
                        "va": 0,
                        "world": 0,
                        "xk": 0
                    },
                    "value": -5,
                    "values": {
                        "ad": -5,
                        "al": -5,
                        "at": -5,
                        "ax": -5,
                        "ba": -5,
                        "be": -5,
                        "bg": -5,
                        "ch": -5,
                        "cy": -5,
                        "cz": -5,
                        "de": -5,
                        "dk": -5,
                        "dz": -5,
                        "ee": -5,
                        "eg": -5,
                        "es": -5,
                        "fi": -5,
                        "fo": -5,
                        "fr": -5,
                        "gg": -5,
                        "gi": -5,
                        "gr": -5,
                        "hr": -5,
                        "hu": -5,
                        "ie": -5,
                        "il": -5,
                        "im": -5,
                        "is": -5,
                        "it": -5,
                        "je": -5,
                        "lb": -5,
                        "li": -5,
                        "lt": -5,
                        "lu": -5,
                        "lv": -5,
                        "ly": -5,
                        "ma": -5,
                        "mc": -5,
                        "md": -5,
                        "me": -5,
                        "mk": -5,
                        "mt": -5,
                        "nl": -5,
                        "no": -5,
                        "pl": -5,
                        "ps": -5,
                        "pt": -5,
                        "ro": -5,
                        "rs": -5,
                        "se": -5,
                        "si": -5,
                        "sj": -5,
                        "sk": -5,
                        "sm": -5,
                        "sy": -5,
                        "tn": -5,
                        "tr": -5,
                        "ua": -5,
                        "uk": -5,
                        "us": -5,
                        "va": -5,
                        "world": -5,
                        "xk": -5
                    },
                    "warning": "origins_are_100_percent_unknown"
                },
                "packaging": {
                    "value": -15,
                    "warning": "packaging_data_missing"
                },
                "production_system": {
                    "labels": [],
                    "value": 0,
                    "warning": "no_label"
                },
                "threatened_species": {
                    "warning": "ingredients_missing"
                }
            },
            "agribalyse": {
                "warning": "missing_agribalyse_match"
            },
            "grade": "unknown",
            "missing": {
                "agb_category": 1,
                "ingredients": 1,
                "labels": 1,
                "origins": 1,
                "packagings": 1
            },
            "missing_agribalyse_match_warning": 1,
            "missing_key_data": 1,
            "scores": {},
            "status": "unknown"
        }, */
        image_front_small_url: string
        image_front_url: string
/*         "nutriscore": {
            "2021": {
                "category_available": 1,
                "data": {
                    "energy": null,
                    "fiber": 0,
                    "fruits_vegetables_nuts_colza_walnut_olive_oils": 0,
                    "is_beverage": 0,
                    "is_cheese": 0,
                    "is_fat": 0,
                    "is_water": 0,
                    "proteins": null,
                    "saturated_fat": null,
                    "sodium": null,
                    "sugars": null
                },
                "grade": "not-applicable",
                "not_applicable_category": "en:dietary-supplements",
                "nutrients_available": 0,
                "nutriscore_applicable": 0,
                "nutriscore_computed": 0
            },
            "2023": {
                "category_available": 1,
                "data": {
                    "energy": null,
                    "fiber": null,
                    "fruits_vegetables_legumes": null,
                    "is_beverage": 0,
                    "is_cheese": 0,
                    "is_fat_oil_nuts_seeds": 0,
                    "is_red_meat_product": 0,
                    "is_water": 0,
                    "proteins": null,
                    "salt": null,
                    "saturated_fat": null,
                    "sugars": null
                },
                "grade": "not-applicable",
                "not_applicable_category": "en:dietary-supplements",
                "nutrients_available": 0,
                "nutriscore_applicable": 0,
                "nutriscore_computed": 0
            }
        }, */
        product_name: string
        product_quantity: Number,
        stores: string,
    }

interface ProductResponse
{
    code: string,
    product: ProductDetails
    status: Number,
    status_verbose: "product found" | "product not found"
}


export default function BarcodeScanner() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState<ScanResult[]>([]);
  const [lastScan, setLastScan] = useState<ScanResult | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [detector, setDetector] = useState<BarcodeDetector | null>(null);
  const [detected, setDetected] = useState<ProductDetails | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Check if BarcodeDetector is supported
    if ('BarcodeDetector' in window) {
      const barcodeDetector = new BarcodeDetector({
        formats: ['qr_code', 'ean_13', 'ean_8', 'code_128', 'code_39', 'upc_a', 'upc_e']
      });
      setDetector(barcodeDetector);
    } else {
      toast({
        title: "Not Supported",
        description: "Barcode detection is not supported in this browser.",
        variant: "destructive"
      });
    }

    // Load scan history from localStorage
    const savedScans = localStorage.getItem('scanHistory');
    if (savedScans) {
      const parsed = JSON.parse(savedScans).map((scan: any) => ({
        ...scan,
        timestamp: new Date(scan.timestamp)
      }));
      setScanResults(parsed);
    }

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  useEffect(()=> {
    if(isScanning && stream){
        console.log("streaming starting ...")
      if (videoRef.current) {
        videoRef.current.srcObject = stream;

        // Wait for video to be ready before starting scan loop
        videoRef.current.onloadedmetadata = () => {
          videoRef.current?.play().then(() => {
            // Start scanning loop after video is playing
            setTimeout(() => {
              scanBarcodes();
            }, 500);
          });
        };
      }
    }
  },[isScanning, stream])

  useEffect(()=>{
    console.log(lastScan)
      async function getProductDetails(code) {
        try {
          const response = await fetch(`https://world.openfoodfacts.org/api/v2/product/${encodeURIComponent(code)}.json`)
          const data = await response.json();
          if(data.status_verbose === 'product found') {
            setDetected(data.product)
          }  
        } catch (error) {
          toast({
            title: "Not Found",
            description: "Product wasn't found",
            variant: "destructive"
          })
        }
      }
      if(lastScan?.rawValue) getProductDetails(lastScan.rawValue)
  },[lastScan])
  const startScanning = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });
      setStream(mediaStream);
      setIsScanning(true);
    } catch (error) {
      console.error('Camera access error:', error);
      toast({
        title: "Camera Error",
        description: "Could not access camera. Please check permissions.",
        variant: "destructive"
      });
    }
  };

  const stopScanning = () => {
    setIsScanning(false);
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  const scanBarcodes = async () => {
    console.log("running")
    if (!detector || !videoRef.current || !canvasRef.current) {
      return;
    }

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (!context || video.readyState !== video.HAVE_ENOUGH_DATA) {
      if (isScanning) {
        requestAnimationFrame(scanBarcodes);
      }
      return;
    }

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    try {
      const barcodes = await detector.detect(canvas);

      if (barcodes.length > 0) {
        const barcode = barcodes[0];
        const newScan: ScanResult = {
          id: Date.now().toString(),
          format: barcode.format,
          rawValue: barcode.rawValue,
          timestamp: new Date()
        };

        // Avoid duplicate scans
        if (!lastScan || lastScan.rawValue !== newScan.rawValue) {
          setLastScan(newScan);
          setScanResults(prevResults => {
            const updatedScans = [newScan, ...prevResults.slice(0, 9)]; // Keep only 10 recent scans
            // Save to localStorage
            localStorage.setItem('scanHistory', JSON.stringify(updatedScans));
            return updatedScans;
          });

          toast({
            title: "Barcode Detected!",
            description: `${barcode.format}: ${barcode.rawValue}`,
          });
          stopScanning()
        }
      }
    } catch (error) {
      console.warn('Barcode detection error:', error);
    }

    if (isScanning) {
      requestAnimationFrame(scanBarcodes);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: "Barcode value copied to clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Could not copy to clipboard.",
        variant: "destructive"
      });
    }
  };

  const clearHistory = () => {
    setScanResults([]);
    setLastScan(null);
    localStorage.removeItem('scanHistory');
    toast({
      title: "History Cleared",
      description: "All scan results have been removed.",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h1 className="text-xl font-semibold flex items-center gap-2">
          <Scan className="w-6 h-6 text-primary" />
          Barcode Scanner
        </h1>
        {scanResults.length > 0 && (
          <Button variant="ghost" size="sm" onClick={clearHistory}>
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Camera View */}
      <div className="relative">
        {isScanning ? (
          <div className="relative">
            <video
              ref={videoRef}
              className="w-full h-[60vh] object-cover bg-black"
              playsInline
              muted
              autoPlay
              onError={(e) => {
                console.error('Video error:', e);
                toast({
                  title: "Video Error",
                  description: "Error displaying camera feed.",
                  variant: "destructive"
                });
              }}
            />
            <canvas ref={canvasRef} className="hidden" />
            
            {/* Scan Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-64 h-64 border-4 border-scan-frame rounded-xl animate-pulse">
                  <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-scan-frame rounded-tl-lg"></div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 border-r-4 border-t-4 border-scan-frame rounded-tr-lg"></div>
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-4 border-b-4 border-scan-frame rounded-bl-lg"></div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-scan-frame rounded-br-lg"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Scan className="w-8 h-8 mx-auto mb-2 animate-pulse" />
                    <p className="text-sm">Position barcode in frame</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stop Button */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <Button onClick={stopScanning} size="lg" variant="destructive" className="rounded-full px-8">
                <X className="w-5 h-5 mr-2" />
                Stop Scanning
              </Button>
            </div>
          </div>
        ) : (
          <div className="h-[60vh] bg-muted flex flex-col items-center justify-center p-8">
            <Camera className="w-16 h-16 text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold mb-2">Ready to Scan</h2>
            <p className="text-muted-foreground text-center mb-6">
              Tap the button below to start scanning barcodes and QR codes
            </p>
            <Button onClick={startScanning} size="lg" className="rounded-full px-8 bg-gradient-to-r from-primary to-primary-hover">
              <Scan className="w-5 h-5 mr-2" />
              Start Scanning
            </Button>
          </div>
        )}
      </div>

      {/* Last Scan Result */}
      {detected && lastScan && (
        <div className="p-4">
          <Card className="p-4 border-success bg-success/5">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="w-4 h-4 text-success" />
                  <Badge variant="outline" className="text-success border-success">
                    {lastScan.format.toUpperCase()}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <div>
                   <p className="font-bold"> Product Name: <p className="font-normal font-mono text-sm break-all mb-2">{detected.product_name}</p></p> 
                    <p className="font-bold">Brand: <p className="font-normal font-mono text-sm break-all mb-2">{detected.brands}</p></p>
                    <p className="font-bold">Seller: <p className="font-normal font-mono text-sm break-all mb-2">{detected.stores}</p></p>
                  </div>
                  <div>
                    <img src={detected.image_front_small_url}></img>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  {lastScan.timestamp.toLocaleString()}
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Scan History */}
      {scanResults.length > 0 && (
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <History className="w-4 h-4 text-muted-foreground" />
            <h3 className="text-sm font-medium text-muted-foreground">Recent Scans</h3>
          </div>
          <div className="space-y-2">
            {scanResults.slice(0, 5).map((scan) => (
              <Card key={scan.id} className="p-3">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="secondary" className="text-xs">
                        {scan.format.toUpperCase()}
                      </Badge>
                    </div>
                    <p className="font-mono text-xs truncate text-muted-foreground">
                      {scan.rawValue}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {scan.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                  <Button
                    onClick={() => copyToClipboard(scan.rawValue)}
                    size="sm"
                    variant="ghost"
                    className="shrink-0"
                  >
                    Copy
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
