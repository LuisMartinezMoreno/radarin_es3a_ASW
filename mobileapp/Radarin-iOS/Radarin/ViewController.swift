//
//  ViewController.swift
//  SuperNavigator
//
//  Created by Yash Patel on 12/7/20.
//

import UIKit
import WebKit
import SafariServices

class ViewController: UIViewController {

    @IBOutlet weak var webView: WKWebView!
    @IBOutlet weak var addressUrlField: UITextField!
    override func viewDidLoad() {
        super.viewDidLoad()
        loadUrl()
    }
    
    func loadUrl() {
        let url = "https://radarines3awebapp.herokuapp.com/"
        let urlRequest = URLRequest(url: URL(string: url)!)
        webView.load(urlRequest)
    }
    
}

