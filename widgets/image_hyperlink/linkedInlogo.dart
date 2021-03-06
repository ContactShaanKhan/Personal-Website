import 'package:flutter/material.dart';
import 'package:responsive_builder/responsive_builder.dart';

class LinkedInLogo extends StatelessWidget {
  const LinkedInLogo({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ResponsiveBuilder(builder: (context, sizingInformation) {
      double imageSize =
          sizingInformation.deviceScreenType == DeviceScreenType.mobile
              ? 75
              : 100;

      return SizedBox(
        height: imageSize,
        width: imageSize,
        child: Image.asset(
          'assets/linkedinlogo.png',
          height: imageSize,
          width: imageSize,
        ),
      );
    });
  }
}
