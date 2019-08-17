# kubernetes-no-load-on-select README

When using Microsoft Kubernetes extension, when the Kubernetes resource tree node is selected in Cluster explorer, it's config document is loaded. This is not always desirable as it slows down the navigation of Clusters Explorer view. Besides, the config document can always loaded using the Context Menu > Load menu item.

## Features

Using configuration settings disable loading of config document for Kubernetes resource when it's tree nodes in Cluster explorer is selected.

## Requirements

This extension works with Microsoft Kubernetes extension.

## Extension Settings

`kubernetes-no-load-on-select.manifestKinds` - Do not load the document on tree node selection for Kubernetes resources for specified kinds. Supported kinds:

All
ConfigMap
DaemonSet
Deployment
Ingress
Job
Namespace
Node
PersistentVolume
Pod
Secret
Service
StorageClass
Volume


## Known Issues

- None

## Release Notes

This is initial release.

### 1.0.0

Initial release.


### 1.0.1

Add icon.