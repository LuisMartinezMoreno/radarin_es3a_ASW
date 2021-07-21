import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import LogoR from "../../LogoR.svg";
import { ProviderLogin } from "@inrupt/solid-react-components";
import "./SignIn.css";
import Provider from "./provider";

export default function SignIn() {
  return (<div className="contenedorSignIn">
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper ">
        <div className="icon-circle" >
          <img src={LogoR} className="rIcon" alt="icono" />
        </div>
        <Typography className="text" component="h1" variant="h5">
          Login
        </Typography>


        {<ProviderLogin
          selectPlaceholder={("Selecciona tu Proveedor")}
          inputPlaholder={("Web Id")}
          formButtonText={("Login")}
          btnTxtWebId={("Insertar WebID")}
          btnTxtProvider={("Selecciona tu Proveedor")}
          className="provider-login-component "
          callbackUri={`${window.location.origin}/`}
          errorsText={{
            unknown: ("Error Desconocido"),
            webIdNotValid: ("Error webID No Valido"),
            emptyProvider: ("Error Proveedor vacio"),
            emptyWebId: ("Error webID vacio"),
          }}
          theme={{
            buttonLogin: "ids-link",
            inputLogin: "",
            linkButton: "",
          }}
          providers={Provider.getIdentityProviders().value}
        />}

        <Grid container className=".solid-pod-link">

          <Grid item>
            <Link className="text" href="https://solidproject.org/users/get-a-pod" target="_blank" variant="body2">
              {"Don't have a Solid POD? Get One now."}
            </Link>
          </Grid>
        </Grid>

      </div>

    </Container>
  </div>
  );
}