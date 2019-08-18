# kubernetes-no-load-on-select README

When using Microsoft Kubernetes extension, when the Kubernetes resource tree node is selected in Cluster explorer, it's config document is loaded. This is not always desirable as it slows down the navigation of Clusters Explorer view. Besides, the config document can always loaded using the Context Menu > Load menu item.

## Features

Using configuration settings disable loading of config document for Kubernetes resource when it's tree nodes in Cluster explorer is selected.

## Requirements

This extension works with Microsoft Kubernetes extension.

## Extension Settings

`kubernetes-no-load-on-select.manifestKinds` - Do not load the document on tree node selection for Kubernetes resources for specified kinds. Supported resource kinds:

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

`kubernetes-no-load-on-select.Pod.onselect` - Specify what command is executed when a tree node for a Pod is selected in Clusters Explorer view. The value of `Default` will basically ignore this setting. 

## Known Issues

- None

## Release Notes

This is initial release.

### 1.0.0

Initial release.


### 1.0.1

Add icon.

### 1.0.2

Better icon.

### 1.0.3

Setting `kubernetes-no-load-on-select.Pod.onselect` to control what command is executed when a tree node for a Pod is selected in Clusters Explorer view.
