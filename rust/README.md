# Overview
Rust implementation of the top-level Java POC, mirroring as close as possible the 
original structure, except the "proto" module.

# Notes

- The various crates use path references to get at the dependent crates. In a real 
scenario, each crate would be published to some registry (e.g. Artifactory) and the 
references would point to versioned artifacts instead.
