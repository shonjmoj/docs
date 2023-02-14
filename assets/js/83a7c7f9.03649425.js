"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[817],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(n),u=r,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||l;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8048:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return d}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=["components"],o={title:"Helm",weight:42},s=void 0,m={unversionedId:"helm/helm",id:"helm/helm",title:"Helm",description:"Helm is the package management tool of choice for Kubernetes. Helm charts provide templating syntax for Kubernetes YAML manifest documents. With Helm, we can create configurable deployments instead of just using static files. For more information about creating your own catalog of deployments, check out the docs at https://helm.sh/docs/intro/quickstart/.",source:"@site/docs/helm/helm.md",sourceDirName:"helm",slug:"/helm/",permalink:"/helm/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/helm/helm.md",tags:[],version:"current",lastUpdatedAt:1676416990,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{title:"Helm",weight:42},sidebar:"mySidebar",previous:{title:"Networking",permalink:"/networking/"},next:{title:"Advanced Options and Configuration",permalink:"/advanced/"}},p={},d=[{value:"Automatically Deploying Manifests and Helm Charts",id:"automatically-deploying-manifests-and-helm-charts",level:3},{value:"Using the Helm CRD",id:"using-the-helm-crd",level:3},{value:"HelmChart Field Definitions",id:"helmchart-field-definitions",level:4},{value:"Customizing Packaged Components with HelmChartConfig",id:"customizing-packaged-components-with-helmchartconfig",level:3},{value:"Migrating from Helm v2",id:"migrating-from-helm-v2",level:3}],c={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Helm is the package management tool of choice for Kubernetes. Helm charts provide templating syntax for Kubernetes YAML manifest documents. With Helm, we can create configurable deployments instead of just using static files. For more information about creating your own catalog of deployments, check out the docs at ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/quickstart/"},"https://helm.sh/docs/intro/quickstart/"),"."),(0,l.kt)("p",null,"K3s does not require any special configuration to use with Helm command-line tools. Just be sure you have properly set up your kubeconfig as per the section about ",(0,l.kt)("a",{parentName:"p",href:"/cluster-access/"},"cluster access"),". K3s does include some extra functionality to make deploying both traditional Kubernetes resource manifests and Helm Charts even easier with the ",(0,l.kt)("a",{parentName:"p",href:"#using-the-helm-crd"},"rancher/helm-release CRD.")),(0,l.kt)("p",null,"This section covers the following topics:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#automatically-deploying-manifests-and-helm-charts"},"Automatically Deploying Manifests and Helm Charts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#using-the-helm-crd"},"Using the Helm CRD")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#customizing-packaged-components-with-helmchartconfig"},"Customizing Packaged Components with HelmChartConfig")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#migrating-from-helm-v2"},"Migrating from Helm v2"))),(0,l.kt)("h3",{id:"automatically-deploying-manifests-and-helm-charts"},"Automatically Deploying Manifests and Helm Charts"),(0,l.kt)("p",null,"Any Kubernetes manifests found in ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests")," will automatically be deployed to K3s in a manner similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl apply"),". Manifests deployed in this manner are managed as AddOn custom resources, and can be viewed by running ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get addon -A"),". You will find AddOns for packaged components such as CoreDNS, Local-Storage, Traefik, etc. AddOns are created automatically by the deploy controller, and are named based on their filename in the manifests directory."),(0,l.kt)("p",null,"It is also possible to deploy Helm charts as AddOns. K3s includes a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/helm-controller/"},"Helm Controller")," that manages Helm charts using a HelmChart Custom Resource Definition (CRD)."),(0,l.kt)("h3",{id:"using-the-helm-crd"},"Using the Helm CRD"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/helm-controller#helm-controller"},"HelmChart resource definition")," captures most of the options you would normally pass to the ",(0,l.kt)("inlineCode",{parentName:"p"},"helm")," command-line tool. Here's an example of how you might deploy Grafana from the default chart repository, overriding some of the default chart values. Note that the HelmChart resource itself is in the ",(0,l.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace, but the chart's resources will be deployed to the ",(0,l.kt)("inlineCode",{parentName:"p"},"monitoring")," namespace."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: helm.cattle.io/v1\nkind: HelmChart\nmetadata:\n  name: grafana\n  namespace: kube-system\nspec:\n  chart: stable/grafana\n  targetNamespace: monitoring\n  set:\n    adminPassword: "NotVerySafePassword"\n  valuesContent: |-\n    image:\n      tag: master\n    env:\n      GF_EXPLORE_ENABLED: true\n    adminUser: admin\n    sidecar:\n      datasources:\n        enabled: true\n')),(0,l.kt)("h4",{id:"helmchart-field-definitions"},"HelmChart Field Definitions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Helm Argument / Flag Equivalent"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Helm Chart name"),(0,l.kt)("td",{parentName:"tr",align:null},"NAME")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.chart"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Helm Chart name in repository, or complete HTTPS URL to chart archive (.tgz)"),(0,l.kt)("td",{parentName:"tr",align:null},"CHART")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.targetNamespace"),(0,l.kt)("td",{parentName:"tr",align:null},"default"),(0,l.kt)("td",{parentName:"tr",align:null},"Helm Chart target namespace"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--namespace"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.version"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Helm Chart version (when installing from repository)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--version"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.repo"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Helm Chart repository URL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--repo"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.repoCA"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the certificates of HTTPS-enabled servers"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ca-file"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.helmVersion"),(0,l.kt)("td",{parentName:"tr",align:null},"v3"),(0,l.kt)("td",{parentName:"tr",align:null},"Helm version to use (",(0,l.kt)("inlineCode",{parentName:"td"},"v2")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"v3"),")"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.bootstrap"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"Set to True if this chart is needed to bootstrap the cluster (Cloud Controller Manager, etc)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.set"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Override simple default Chart values. These take precedence over options set via valuesContent."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--set")," / ",(0,l.kt)("inlineCode",{parentName:"td"},"--set-string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.jobImage"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the image to use when installing the helm chart. E.g. rancher/klipper-helm:v0.3.0 ."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"300"),(0,l.kt)("td",{parentName:"tr",align:null},"Timeout in seconds for Helm operations"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--timeout"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.failurePolicy"),(0,l.kt)("td",{parentName:"tr",align:null},"reinstall"),(0,l.kt)("td",{parentName:"tr",align:null},"Set to ",(0,l.kt)("inlineCode",{parentName:"td"},"abort")," which case the Helm operation is aborted, pending manual intervention by the operator."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.valuesContent"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Override complex default Chart values via YAML file content"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--values"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.chartContent"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Base64-encoded chart archive .tgz - overrides spec.chart"),(0,l.kt)("td",{parentName:"tr",align:null},"CHART")))),(0,l.kt)("p",null,"Content placed in ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/static/")," can be accessed anonymously via the Kubernetes APIServer from within the cluster. This URL can be templated using the special variable ",(0,l.kt)("inlineCode",{parentName:"p"},"%{KUBERNETES_API}%")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"spec.chart")," field. For example, the packaged Traefik component loads its chart from ",(0,l.kt)("inlineCode",{parentName:"p"},"https://%{KUBERNETES_API}%/static/charts/traefik-12.0.000.tgz"),"."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," field should follow the Helm chart naming conventions. Refer ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/chart_best_practices/conventions/#chart-names"},"here")," to learn more.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Notice on File Naming Requirements:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"HelmChart")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"HelmChartConfig")," manifest filenames should adhere to Kubernetes object ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/"},"naming restrictions"),". The Helm Controller uses filenames to create objects; therefore, the filename must also align with the restrictions. Any related errors can be observed in the k3s-server logs. The example below is an error generated from using underscores:"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre"},"level=error msg=\"Failed to process config: failed to process \n/var/lib/rancher/k3s/server/manifests/k3s_ingress_daemonset.yaml: \nAddon.k3s.cattle.io \\\"k3s_ingress_daemonset\\\" is invalid: metadata.name: \nInvalid value: \\\"k3s_ingress_daemonset\\\": a lowercase RFC 1123 subdomain \nmust consist of lower case alphanumeric characters, '-' or '.', and must \nstart and end with an alphanumeric character (e.g. 'example.com', regex \nused for validation is '[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\\\.[a-z0-9]\n([-a-z0-9]*[a-z0-9])?)*')\"\n"))),(0,l.kt)("h3",{id:"customizing-packaged-components-with-helmchartconfig"},"Customizing Packaged Components with HelmChartConfig"),(0,l.kt)("admonition",{title:"Version Gate",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Available as of ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.19.1%2Bk3s1"},"v1.19.1+k3s1"))),(0,l.kt)("p",null,"To allow overriding values for packaged components that are deployed as HelmCharts (such as Traefik), K3s supports customizing deployments via a HelmChartConfig resources. The HelmChartConfig resource must match the name and namespace of its corresponding HelmChart, and it supports providing additional ",(0,l.kt)("inlineCode",{parentName:"p"},"valuesContent"),", which is passed to the ",(0,l.kt)("inlineCode",{parentName:"p"},"helm")," command as an additional value file."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"HelmChart ",(0,l.kt)("inlineCode",{parentName:"p"},"spec.set")," values override HelmChart and HelmChartConfig ",(0,l.kt)("inlineCode",{parentName:"p"},"spec.valuesContent")," settings.")),(0,l.kt)("p",null,"For example, to customize the packaged Traefik ingress configuration, you can create a file named ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests/traefik-config.yaml")," and populate it with the following content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: traefik\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    image:\n      name: traefik\n      tag: v2.8.5\n    forwardedHeaders:\n      enabled: true\n      trustedIPs:\n        - 10.0.0.0/8\n    ssl:\n      enabled: true\n      permanentRedirect: false\n")),(0,l.kt)("h3",{id:"migrating-from-helm-v2"},"Migrating from Helm v2"),(0,l.kt)("admonition",{title:"Version Gate",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"As of ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.17.0%2Bk3s.1"},"v1.17.0+k3s.1")," Helm v3 is supported and used by default.")),(0,l.kt)("p",null,"K3s can handle either Helm v2 or Helm v3. If you wish to migrate to Helm v3, ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/"},"this")," blog post by Helm explains how to use a plugin to successfully migrate. Refer to the official Helm 3 documentation ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/"},"here")," for more information. Just be sure you have properly set your kubeconfig as per the section about ",(0,l.kt)("a",{parentName:"p",href:"/cluster-access/"},"cluster access.")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Helm 3 no longer requires Tiller and the ",(0,l.kt)("inlineCode",{parentName:"p"},"helm init")," command. Refer to the official documentation for details.")))}u.isMDXComponent=!0}}]);